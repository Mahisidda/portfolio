export const blogs = [
  {
    id: '1',
    title: 'Brec-The Book Recommender',
    description: ` 
    I have hands-on experience building a RAG model at Hashmint. After that, 
    I wanted to get a real feel for the diversity of Artificial Intelligence actually getting my hands dirty with something totally different.That's why I decided to work on building a recommendation system. The whole thing started from my IFT 511 final course project, where we just had a 
    CSV file and needed to recommend 5 books with the highest estimated ratings that a user hadn't already read. 
    I figured, why not take that basic idea and make it genuinely user-interactive, not just some offline script.</br> <br/>

    <p>For better understanding of my doings in this project I will divide into sections and explain each section in detail.</p> </br><br/>

    <h2><strong>Backend</strong></h2>  </br>
    <p>At first, I just took the CSV and tried to build some endpoints. 
    But I realized pretty quickly, if you want it interactive and scalable, you can't just keep stacking endpoints on a basic brute-force approach.
    You need to step back and actually understand the core algorithm how collaborative filtering works, how user preferences can be encoded, 
    and how to get the most out of the data. </p> </br>
    
    <p>During one of my deep work sessions, I mapped out a cleaner pipeline: </p> </br>
    <ul>
    <li> 1. User picks X books they like.</li>
	  <li> 2. Build a pseudo-user vector from those picks, representing their taste profile.</li>
	  <li> 3. Compare this pseudo vector to all user vectors in the sparse matrix.</li>
	  <li> 4. Pass these similarities to the collaborative filtering logic to estimate ratings.</li>
	  <li> 5. Calculate weighted averages to rank candidate books.</li>
	  <li> 6. Return top book recommendations with their ISBNs and scores.</li>
    </ul> </br>
    <p>I wrote up the core logic and quickly ran into my first real-world ML challenge that is performance factor.
    The original collaborative filtering logic was just too slow. If you try to brute-force cosine similarity between a pseudo-user and every user in a big matrix, it's going to crawl, especially as you scale up.
    That's when I had to stop and ask: "What would a legit ML engineer do to actually make this production-ready?" 
    </br><br/>So I decided to integrate FAISS for fast similarity search. I'd used FAISS before in RAG models, so I knew it could handle big datasets and find nearest neighbors way faster than brute-force.
    But integrating FAISS with a collaborative filtering pipeline isn't just plug-and-play. The moment I started adapting the code, I got hit with a classic ML engineering headache: dimension mismatch errors.
    Here's what I learned matrix shape mismatches are inevitable in any non-trivial ML system, especially when you start slicing and dicing with batched operations or mixing libraries. The brute-force method and FAISS approach handle data shapes differently, especially when you're extracting K-nearest users and matching their ratings to candidate books.
    </br><br/>I had to really trace the math: what are the actual shapes at each step, what's being multiplied, and how do you make sure the sim_vec and ratings_submatrix are lined up?
    After a lot of back and forth, I finally fixed it by making sure the ratings submatrix was built only from the K neighbors FAISS found, and then used those with the similarity vector for scoring. Once that bug was squashed, the backend started serving up fast, legit recommendations at scale. </p>
    </br><br/> <p> <strong>In the end:</strong> this backend wasn't just about "making it work." 
    It taught me what it means to engineer ML for the real world: think about scale, nail your data shapes, and expect bugs when optimizing for performance. 
    I walked away with a recommender system that's not just correct, but built the way it'd need to be for actual users, not just a class assignment.</strong></p>
    <p> </p> <br/>

    <h2><strong>Frontend</strong></h2>  </br>
    <p> <p>Next.js, React, TypeScript, and Tailwind CSS that's my go-to stack these days. 
    I've been building my portfolio and personal sites on Next.js, so adapting it for my recommender frontend was the obvious move.
    Honestly, Next.js has quickly become my favorite component routing, file-based structure, and SSR out of the box. It just feels right.
    </br><br/>I wanted the frontend to be more interactive for users. No more old-school textboxes where you punch in some user ID nobody remembers. 
    Instead, you just pick a few books from a grid minimal effort, maximum relevance. The way I see it, the UI shouldn't make the user think. Next.js made that flow easy to implement. 
    I sent the first version to a few friends and asked for their honest feedback. Some of them pointed out it'd be better with thumbnails and author info visible, plus quick links to Goodreads. 
    </br><br/>I took that and added those features now the grid is not just functional but actually helpful. Thumbnails, titles, author names, and a direct Goodreads link if someone wants more info. 
    Little things, but they make the flow smoother. </p> </br>
    <p> At the end of the day, User interactivity and convinience is main priority!</p> <br/>

    <h2><strong>How I optimized the speed of fetching books and recommendations</strong></h2>  </br>
    <p> Once the core recommendation engine was solid, I hit another real-world bottleneck: repeated queries started slowing down the whole flow.
    Every time a user picked the same set of books or checked the popular list, the backend had to grind through the same computations, reading from disk and crunching numbers like it was Day 1 all over again.
    That's when I realized if I want this thing to actually scale or even feel snappy, I need proper caching. </p> <br/>

    <p>Redis was the obvious answer. It's basically the gold standard for fast, in-memory data storage.
    I wired it up as a caching layer between my Flask backend and the heavier data crunching logic.
    Now, whenever a popular books list is fetched or a user runs a recommendation, the backend first checks Redis: </p> <br/>
    <ul>
    <li>  • If the result is cached, Then instant response, no waiting around.</li>
    <li>  • If not, it computes fresh, serves it, and stores it in Redis for next time.</li>
    </ul> <br/>
    <p> ALong with optimized Pandas functions,we cut down response times drastically, especially for the common "show me popular books" and "get my recommendations" calls.
    But, not gonna lie getting Redis to play nice in a Dockerized, multi-service setup was its own headache.
    Once the containers were talking, though, Redis just did its job and the whole system felt way more professional. </p> <br/>
    
    <h2><strong>Deployment and ops</strong></h2>  </br>
    <p>It all started with me staring at this empty popular books grid, just hitting me with 'Failed to fetch' every time. 
    Classic "what the heck is actually broken?" moment. So, I started peeling back the layers.</p> <br/>

    <p> First up, backend to Redis was acting up one of those classic scenarios where your services wanna play tag, but one keeps falling asleep (shoutout to Redis randomly napping because of port conflicts on my system). Once I got Redis to stop acting like a ghost and actually respond, the API started returning data, but then... all I saw was "Unknown Author" and "Unknown Title." Like, really? After all that, the backend forgot who wrote the book? The frustation was real. I have spent almost 4 hours straight trying to understand what went wrong in the latter case. That forced me to dive back into the data pipeline had to make sure the backend actually knew its own books, mapping authors and titles cleanly instead of just spitting out placeholders. Got that sorted, and finally, the API was serving real book info. Overall, I got better understanding in building API endpoints. </p> <br/>

    <p>But then, going from local to cloud, the frontend just wouldn't talk to the backend. Turns out, you gotta make sure the frontend knows where the backend lives, API URL has to be on point, and it changes whether I'm running everything side-by-side or deploying to the cloud. Each time I fixed something, the grid started filling up, and every single book card that finally showed up with a real author and title felt like a win. </p> <br/>

    <p>In the end, I got a working, production-ready recommendation system, Where user can get recommendations based on their preferences and click on the Goodreads link for more information, that's not just fast but also feels like a real product. 
    I learned a ton about ML engineering, API design, and the real-world challenges of building something that actually works for users. 
    It's not just about the code it's about the whole system, how it works, and how to make it work for real people. </p> <br/>


    <div style="margin-top: 20px; margin-bottom: 20px; max-width: 100%;">
      <video
        style="width: 100%; height: auto; max-height: 500px; display: block; margin-left: auto; margin-right: auto;"
        autoplay
        loop
        muted
        playsinline
        src="/brec-gr.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>

    <p><strong>Next up:</strong> Testing, Validation, and Optimization </strong></p> <br/>

    <p> With the core stack in place, the focus shifted to ensuring reliability and real-world usability.
    I wrote unit tests for the backend recommendation logic and API endpoints, and used Playwright to run end-to-end flows on the frontend simulating real user actions and verifying every edge case. 
    Friend's feedback led to rapid UI and UX tweaks.
    </br><br/>The biggest takeaway? Building for real users means expecting the unexpected: from mismatched data fields to cloud config headaches, every bug was a lesson in production engineering.
    Looking ahead, I plan to automate more of the deployment (CI/CD), expand offline metrics for deeper evaluation, and integrate more robust monitoring. There's always another level to reach but every stage brings sharper engineering instincts.</p> <br/>

    <p> The biggest setback? Honestly, the data. Using a static dataset meant I was just reshuffling the same 100 books over and over. 
    It got the job done, but it's not how a real recommender should behave. Live, diverse data is the next leap. </p> <br/>
    <p class="text-center">
      <a
        href="https://brec.mahisidda.com"
        target="_blank"
        class="inline-block px-4 py-2 hover:bg-yellow-600 rounded"
      >
        <strong>Try Brec Here!</strong>
      </a>
    </p>
    <br/>
    `,
    date: 'June 1st, 2025',
    readTime: '10 min read'
  }
];

