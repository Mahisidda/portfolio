export const blogs = [
  {
    id: '1',
    title: 'Brec-The Book Recommender',
    description: ` 
    I have hands-on experience building a RAG model at Hashmint. After that, 
    I wanted to get a real feel for the diversity of Artificial Intelligence actually getting my hands dirty with something totally different.That's why I decided to work on building a recommendation system. The whole thing started from my IFT 511 final course project, where we just had a 
    CSV file and needed to recommend 5 books with the highest estimated ratings that a user hadn’t already read. 
    I figured, why not take that basic idea and make it genuinely user-interactive, not just some offline script.</br> <br/>

    <p>For better understanding of my doings in this project I will divide into sections and explain each section in detail.</p> </br><br/>

    <h2><strong>Backend</strong></h2>  </br>
    <p>At first, I just took the CSV and tried to build some endpoints. 
    But I realized pretty quickly, if you want it interactive and scalable, you can’t just keep stacking endpoints on a basic brute-force approach.
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
    The original collaborative filtering logic was just too slow. If you try to brute-force cosine similarity between a pseudo-user and every user in a big matrix, it’s going to crawl, especially as you scale up.
    That’s when I had to stop and ask: “What would a legit ML engineer do to actually make this production-ready?” 
    </br><br/>So I decided to integrate FAISS for fast similarity search. I’d used FAISS before in RAG models, so I knew it could handle big datasets and find nearest neighbors way faster than brute-force.
    But integrating FAISS with a collaborative filtering pipeline isn’t just plug-and-play. The moment I started adapting the code, I got hit with a classic ML engineering headache: dimension mismatch errors.
    Here’s what I learned matrix shape mismatches are inevitable in any non-trivial ML system, especially when you start slicing and dicing with batched operations or mixing libraries. The brute-force method and FAISS approach handle data shapes differently, especially when you’re extracting K-nearest users and matching their ratings to candidate books.
    </br><br/>I had to really trace the math: what are the actual shapes at each step, what’s being multiplied, and how do you make sure the sim_vec and ratings_submatrix are lined up?
    After a lot of back and forth, I finally fixed it by making sure the ratings submatrix was built only from the K neighbors FAISS found, and then used those with the similarity vector for scoring. Once that bug was squashed, the backend started serving up fast, legit recommendations at scale. </p>
    </br><br/> <p> <strong>In the end:</strong> this backend wasn’t just about “making it work.” 
    It taught me what it means to engineer ML for the real world: think about scale, nail your data shapes, and expect bugs when optimizing for performance. 
    I walked away with a recommender system that’s not just correct, but built the way it’d need to be for actual users, not just a class assignment.</strong></p>
    <p> </p> <br/>

    <h2><strong>Frontend</strong></h2>  </br>
    <p> <p>Next.js, React, TypeScript, and Tailwind CSS that’s my go-to stack these days. 
    I’ve been building my portfolio and personal sites on Next.js, so adapting it for my recommender frontend was the obvious move.
    Honestly, Next.js has quickly become my favorite component routing, file-based structure, and SSR out of the box. It just feels right.
    </br><br/>I wanted the frontend to be more interactive for users. No more old-school textboxes where you punch in some user ID nobody remembers. 
    Instead, you just pick a few books from a grid minimal effort, maximum relevance. The way I see it, the UI shouldn’t make the user think. Next.js made that flow easy to implement. 
    I sent the first version to a few friends and asked for their honest feedback. Some of them pointed out it’d be better with thumbnails and author info visible, plus quick links to Goodreads. 
    </br><br/>I took that and added those features now the grid is not just functional but actually helpful. Thumbnails, titles, author names, and a direct Goodreads link if someone wants more info. 
    Little things, but they make the flow smoother. </p> </br> </p> </br>
    `,
    date: 'May 30th, 2025',
    readTime: '1 min read'
  }
];

