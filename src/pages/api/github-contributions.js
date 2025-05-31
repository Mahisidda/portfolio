export default async function handler(req, res) {
  const githubUsername = process.env.GITHUB_USERNAME;
  const githubToken = process.env.GITHUB_PAT;

  if (!githubUsername || !githubToken) {
    return res.status(500).json({ error: 'GitHub username or token not configured in environment variables.' });
  }

  // Get current year
  const currentYear = new Date().getFullYear();
  // For 2025, you would use:
  // const targetYear = 2025;

  // Set the from and to dates for the entire current year
  const fromDate = new Date(currentYear, 0, 1).toISOString(); // January 1st
  const toDate = new Date(currentYear, 11, 31, 23, 59, 59, 999).toISOString(); // December 31st, end of day

  // If you wanted to hardcode for 2025:
  // const fromDate = new Date(targetYear, 0, 1).toISOString();
  // const toDate = new Date(targetYear, 11, 31, 23, 59, 59, 999).toISOString();

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
                color
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    username: githubUsername,
    from: fromDate,
    to: toDate,
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${githubToken}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('GitHub API Error:', response.status, errorBody);
      return res.status(response.status).json({ error: `GitHub API Error: ${response.statusText}`, details: errorBody });
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GitHub GraphQL Errors:', data.errors);
      return res.status(400).json({ error: 'GitHub GraphQL Error', details: data.errors });
    }
    // Check if user and contributionsCollection exist before trying to access deeper properties
    if (data.data && data.data.user && data.data.user.contributionsCollection) {
      res.status(200).json(data.data.user.contributionsCollection.contributionCalendar);
    } else {
      // Handle cases where the expected data structure is not returned (e.g., user not found, no contributions)
      console.warn('GitHub API did not return the expected contributions data structure:', data);
      res.status(200).json({ totalContributions: 0, weeks: [] }); // Send empty calendar
    }
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
} 