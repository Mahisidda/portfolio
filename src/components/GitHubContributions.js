"use client"; // Required for components using hooks like useState, useEffect

import React, { useState, useEffect } from 'react';

const GitHubContributions = () => {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/github-contributions');
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || `Error: ${res.status}`);
        }
        const data = await res.json();
        setCalendar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-400">Loading contribution data...</p>;
  if (error) return <p className="text-center text-red-500">Error loading contributions: {error}</p>;
  if (!calendar) return <p className="text-center text-gray-400">No contribution data found.</p>;

  // Basic rendering - you can style this much better!
  // Each 'week' is a column, and 'contributionDays' are rows within that column.
  // GitHub's graph usually has days of the week as rows and weeks as columns.
  // This example will render a simplified grid.

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  // Prepare data for rendering in a more GitHub-like grid (days as rows, weeks as columns)
  // Create a 7-row array for days of the week
  const contributionGrid = Array.from({ length: 7 }, () => []);
  const monthMarkers = [];
  let currentMonth = -1;

  calendar.weeks.forEach((week, weekIndex) => {
    // Add placeholder for days not in the first week
    if (weekIndex === 0) {
        for (let i = 0; i < week.contributionDays[0].weekday; i++) {
            contributionGrid[i].push(null); // placeholder for empty days
        }
    }
    week.contributionDays.forEach(day => {
      if (day) {
        contributionGrid[day.weekday].push(day);
        const month = new Date(day.date).getMonth();
        if (month !== currentMonth) {
            // Add month marker if it's the start of a new month and not too close to the previous one
             if (monthMarkers.length === 0 || weekIndex > (monthMarkers[monthMarkers.length -1]?.weekIndex + 2)) {
                monthMarkers.push({ name: monthNames[month], weekIndex });
            }
          currentMonth = month;
        }
      }
    });
  });


  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4 text-white text-center">My GitHub Contributions</h3>
      <p className="text-sm text-gray-400 mb-4 text-center">Total Contributions Last Year: {calendar.totalContributions}</p>
      
      <div className="relative flex justify-center">
        {/* Month Markers */}
        <div className="flex absolute -top-6 left-0 right-0 px-1" style={{ marginLeft: '24px' /* Adjust for weekday labels */ }}>
          {monthMarkers.map((month, index) => (
            <div key={index} className="text-xs text-gray-400 mr-1" style={{ position: 'absolute', left: `${(month.weekIndex / calendar.weeks.length) * 100}%` }}>
              {month.name}
            </div>
          ))}
        </div>

        {/* Weekday Labels + Grid */}
        <div className="flex">
          <div className="flex flex-col mr-1 space-y-px py-1">
            {weekDays.map((day, index) => (
              <div key={day} className={`w-5 h-5 text-xs text-gray-400 flex items-center justify-center ${index % 2 === 0 ? 'opacity-0' : ''}`}>
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-flow-col gap-px">
            {contributionGrid[0].map((_, colIndex) => ( // Iterate over weeks (columns)
                <div key={`col-${colIndex}`} className="grid grid-rows-7 gap-px">
                {weekDays.map((_day, rowIndex) => { // Iterate over days (rows)
                    const day = contributionGrid[rowIndex][colIndex];
                    if (!day) return <div key={`empty-${rowIndex}-${colIndex}`} className="w-3 h-3 md:w-4 md:h-4 bg-gray-700 rounded-sm" title="No data"></div>;
                    return (
                    <div
                        key={day.date}
                        className="w-3 h-3 md:w-4 md:h-4 rounded-sm"
                        style={{ backgroundColor: day.color || '#161b22' }} // Default to GitHub's no-contribution color
                        title={`Contributions: ${day.contributionCount} on ${day.date}`}
                    ></div>
                    );
                })}
                </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end mt-4 text-xs text-gray-500">
        <span className="mr-2">Less</span>
        <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
        <div className="w-3 h-3" style={{ backgroundColor: '#0e4429' }}></div> {/* GitHub colors approx */}
        <div className="w-3 h-3" style={{ backgroundColor: '#006d32' }}></div>
        <div className="w-3 h-3" style={{ backgroundColor: '#26a641' }}></div>
        <div className="w-3 h-3" style={{ backgroundColor: '#39d353' }}></div>
        <span className="ml-2">More</span>
      </div>
    </div>
  );
};

export default GitHubContributions; 