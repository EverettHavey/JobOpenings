// --- Mock Job Data ---
const funnyJobs = [
    {
        id: 1,
        title: "Professional Cheese Staring Analyst",
        company: "Dairy Diligence Corp.",
        salary: "$45,000/year",
        description: "Must be able to stare intensely at various blocks of cheese for 8 hours a day, looking for signs of existential dread or perfect ripeness. No blinking allowed.",
    },
    {
        id: 2,
        title: "Emergency Starbucks Runner (VP Level)",
        company: "Late Riser Tech",
        salary: "$75,000/year + unlimited latte allowance",
        description: "Your sole purpose is to perform high-speed, zero-tolerance coffee retrieval runs. Must master the art of carrying six grande cups without a tray. Experience with traffic evasion a plus.",
    },
    {
        id: 3,
        title: "Food Vice President & Chief Snack Officer",
        company: "Munchies Global",
        salary: "$120,000/year",
        description: "Responsible for all executive decisions regarding office snacks. This includes daily taste tests, judging chip crunch-factor, and ensuring a 1:1 ratio of sweet to savory treats. Mandatory naps are part of the role.",
    },
    {
        id: 4,
        title: "Head of Duct Tape and Glitter Deployment",
        company: "Fix-It-Fast Inc.",
        salary: "$55,000/year",
        description: "We believe anything can be fixed with duct tape, and anything can be improved with glitter. You are the master architect of this philosophy. High-stakes crafting environment.",
    },
    {
        id: 5,
        title: "Professional Netflix Binge Consultant",
        company: "Couch Culture Group",
        salary: "$60/hour",
        description: "We pay you to watch TV. Seriously. You must provide detailed, in-depth analysis of plot holes, character arcs, and optimal snack pairings. 10+ hours of daily viewing required.",
    },
    // --- 25 New Funny Jobs ---
    {
        id: 6,
        title: "Chief Executive Sloth Trainer",
        company: "Slow-Paced Logistics",
        salary: "$35,000/year",
        description: "Manage and motivate our team of sloths. Must be extremely patient. Punctuality is strictly optional.",
    },
    {
        id: 7,
        title: "Director of Misspelling Correction",
        company: "Typo Titans",
        salary: "$90,000/year",
        description: "Dedicated to intentionally inserting, and then dramatically correcting, subtle typos in executive emails to boost team morale. Must have excellent acting skills.",
    },
    {
        id: 8,
        title: "Cereal Milk Quality Control Taster",
        company: "Breakfast Bounty Labs",
        salary: "$50,000/year + spoon allowance",
        description: "Evaluate the optimal flavor and saturation levels of post-cereal milk. Must possess a refined palate for 'Fruity Pebbles' residue.",
    },
    {
        id: 9,
        title: "Remote Control Battery Replacement Specialist",
        company: "Sofa Surfing Solutions",
        salary: "$40,000/year",
        description: "On-call 24/7 to change the AAA batteries in all office remote controls. Must be able to locate a screwdriver quickly and handle emotional distress from dead remotes.",
    },
    {
        id: 10,
        title: "Professional Door Slam Aversion Expert",
        company: "Quiet Office Initiative",
        salary: "$65,000/year",
        description: "Your job is to silently follow people and ensure they don't accidentally let a heavy door slam shut. Requires ninja-like reflexes and zero social interaction.",
    },
    {
        id: 11,
        title: "Rubber Duck Debugging Consultant",
        company: "Syntax Superstars",
        salary: "$80,000/year",
        description: "Listen patiently to stressed programmers explain their code to you. Your only response must be 'Quack.' (Training provided).",
    },
    {
        id: 12,
        title: "Invisible Wall Painter",
        company: "Air Artistry Co.",
        salary: "$48,000/year",
        description: "Paint walls using transparent paint. Must maintain the highest standards of invisibility and ensure full coverage is achieved.",
    },
    {
        id: 13,
        title: "Cat Video Curator (Trending Specialist)",
        company: "Internet Time Wastage Inc.",
        salary: "$52,000/year",
        description: "Responsible for finding, ranking, and categorizing the world's finest cat videos. Knowledge of sad-eyed kittens vs. parkour cats is essential.",
    },
    {
        id: 14,
        title: "Professional Line Stander (VIP Service)",
        company: "Queue Kings",
        salary: "$30/hour",
        description: "Wait in long, boring lines for high-profile clients who value their time. Must wear comfortable shoes and bring own entertainment.",
    },
    {
        id: 15,
        title: "Office Plant Therapist",
        company: "Green Growth Consultants",
        salary: "$58,000/year",
        description: "Provide motivational talks and emotional support to struggling office ferns and succulents. Must have a soothing voice and believe plants have feelings.",
    },
    {
        id: 16,
        title: "The Guy Who Checks If The Toaster Works",
        company: "Toast & Butter Solutions",
        salary: "$38,000/year",
        description: "Daily inspection of the office toaster. Must test various bread types and report on the optimal 'darkness' setting. Free toast is a perk.",
    },
    {
        id: 17,
        title: "Chief Pillow Fort Engineer",
        company: "Naptime Innovations",
        salary: "$68,000/year",
        description: "Design and construct elaborate, structurally sound pillow and blanket forts for mandatory afternoon relaxation sessions. Must pass a 'Cushion Load Test.'",
    },
    {
        id: 18,
        title: "Puddle Depth Measurer",
        company: "Urban Exploration Bureau",
        salary: "$42,000/year",
        description: "Measure the depth of every puddle on company property after it rains. Requires waterproof boots and a clipboard. Accuracy over speed.",
    },
    {
        id: 19,
        title: "Slightly Off-Key Motivational Singer",
        company: "Acoustic Awkwardness Ltd.",
        salary: "$50,000/year",
        description: "Sing upbeat, motivational songs to employees, but always slightly off-key to keep everyone on edge. Must be enthusiastic but mildly irritating.",
    },
    {
        id: 20,
        title: "Pre-Chewed Gum Removal Technician",
        company: "Desk Detritus Management",
        salary: "$40,000/year",
        description: "Locate and delicately remove hardened gum from under desks and chairs. Requires specialized scraping tools and a strong stomach.",
    },
    {
        id: 21,
        title: "Social Media Argument Mediator",
        company: "Online Outrage Solutions",
        salary: "$70,000/year",
        description: "Infiltrate viral comment sections to de-escalate pointless online feuds. Must have the patience of a saint and be fluent in emojis.",
    },
    {
        id: 22,
        title: "Professional Compliment Distributor",
        company: "Ego Boost Industries",
        salary: "$55,000/year",
        description: "Roam the office and give authentic, yet slightly over-the-top, compliments to every employee, every day. Must have a large vocabulary of synonyms for 'awesome.'",
    },
    {
        id: 23,
        title: "Human Umbrella Stand",
        company: "Rainy Day Rentals",
        salary: "$30/hour + tips",
        description: "Hold executives' umbrellas while they walk short distances. Must have a sturdy grip and be comfortable being slightly damp.",
    },
    {
        id: 24,
        title: "The Person Who Renames Tabs",
        company: "Browser Organization Services",
        salary: "$46,000/year",
        description: "Organize and rename browser tabs for busy executives. Must be able to distill 50 open tabs down to 5 meaningful emojis and abbreviations.",
    },
    {
        id: 25,
        title: "Traffic Cone Repositioning Artist",
        company: "Orange Barrier Aesthetics",
        salary: "$43,000/year",
        description: "Ensure all construction cones on site are geometrically pleasing and aesthetically arranged. A background in Feng Shui is helpful.",
    },
    {
        id: 26,
        title: "Elevator Music DJ (Mood Management)",
        company: "Ascension Soundscapes",
        salary: "$62,000/year",
        description: "Curate a rotating playlist of smooth jazz and early 90s pop for the office elevator. Must gauge morning vs. afternoon mood effectively.",
    },
    {
        id: 27,
        title: "Remote Meeting Mute Button Monitor",
        company: "Webinar Watchdogs",
        salary: "$54,000/year",
        description: "The sole employee responsible for shouting 'You're on mute!' when a speaker forgets. Requires fast reflexes and excellent hearing.",
    },
    {
        id: 28,
        title: "Official T-Rex Impressionist",
        company: "Dinosaur Dynamics",
        salary: "$72,000/year",
        description: "Provide emotional and vocal T-Rex impressions during staff meetings to break tension. Must master the tiny-arm wave.",
    },
    {
        id: 29,
        title: "Air Bubble Wrap Popper (Stress Relief)",
        company: "Packaging Decompression Unit",
        salary: "$35/hour",
        description: "Spend all day popping bubble wrap from incoming shipments to generate calming sounds for the office. Must resist the urge to pop it all at once.",
    },
    {
        id: 30,
        title: "Chief Fingerprint Wiper",
        company: "Glass Gleam Group",
        salary: "$39,000/year",
        description: "Wipe fingerprints off all shiny surfaces (monitors, tablet screens, elevator buttons). Obsessive attention to detail required.",
    },
    {
    "id": 31,
    "title": "Chief Water-Vibe Mixologist (Pool DJ)",
    "company": "Resort Rhythms Inc.",
    "salary": "$44,000/year",
    "description": "Responsible for mood-setting music transitions between 'Calm Floating' and 'Aggressive Water Aerobics.' Must maintain a library of 10,000+ songs that sound acceptable when heard through a damp, slightly overheated speaker system. Mandatory requirement: No 'Who Let The Dogs Out' after 3 PM."
    },
    {
    "id": 32,
    "title": "Professional Meeting End Signal Expert",
    "company": "Time Tamer Tech",
    "salary": "$50,000/year",
    "description": "Walk into endless meetings and subtly perform a pre-arranged signal (e.g., a cough, a wink, a dramatic glance at a non-existent watch) to allow the CEO to leave gracefully."
    },
    {
    "id": 33,
    "title": "Chief Fridge-Light Sensor Tester",
    "company": "Appliance Angst Inc.",
    "salary": "$37,000/year",
    "description": "Spend the workday slowly opening and closing the office refrigerator door to verify that the internal light reliably switches off when the door is closed. Requires patience and strong neck muscles."
    },
    {
    "id": 34,
    "title": "Chief Office Supply Hoarder Negotiator",
    "company": "Pen Protection Patrol",
    "salary": "$60,000/year",
    "description": "Mediator between employees who secretly stockpile the best office supplies (pens, sticky notes) and those who need them. Must be good at hostage situations involving high-lighters."
    },
    {
    "id": 35,
    "title": "Corporate Time-Wasting Expert",
    "company": "Procrastination Partners",
    "salary": "$70,000/year",
    "description": "Design and implement strategies that look productive but waste maximum time, ensuring no project ever launches early. Specialization in color-coding unnecessary spreadsheets is mandatory."
    },
    {
    "id": 36,
    "title": "Human Placeholder for Furniture Deliveries",
    "company": "Wait Watchers Agency",
    "salary": "$35,000/year",
    "description": "Sit on an empty box and wait for hours for the delivery window of a new chair or desk. The key is to look busy but not *too* busy. Requires endless patience and charged phone."
    },
    {
    "id": 37,
    "title": "Emergency Break Room Snack Restocker",
    "company": "Crunch Control Crew",
    "salary": "$50,000/year",
    "description": "The moment the last bag of chips is taken or the last K-cup is used, a silent alarm sounds, and you must appear instantly with fresh supplies, like a snack-based ninja."
    },
    {
    "id": 38,
    "title": "Dedicated Loading Screen Observer",
    "company": "Progress Monitoring Professionals (PMP)",
    "salary": "$41,000/year",
    "description": "Sit inside a designated, climate-controlled utility closet with a dedicated monitor displaying the company's most notoriously slow server loading screen. The employee's sole duty is to watch the progress bar and loudly announce when it finally hits 100%. Requires intense focus on incremental change and a high tolerance for repetitive elevator music."
    },
    {
    "id": 39,
    "title": "Official Paper Jam Mediator and Toner Level Mystic",
    "company": "Duplication Domination Dept.",
    "salary": "$43,000/year",
    "description": "Maintain a permanent vigil near the office copier/fax machine. The main task is to preemptively sense a paper jam before it occurs and silently remove the offending sheet. Must also stare intently at the 'Toner Low' warning light, making hourly predictions about its operational lifespan. Requires the ability to look extremely busy while doing almost nothing."
    },

];

const jobListContainer = document.getElementById('job-list');
const modal = document.getElementById('application-modal');
const closeButton = document.querySelector('.close-button');
const applicationForm = document.getElementById('application-form');
const submissionMessage = document.getElementById('submission-message');

// Function to render all job cards
function renderJobCards() {
    funnyJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p class="salary"><strong>Pay:</strong> ${job.salary}</p>
            <p>${job.description}</p>
            <button class="apply-button" data-job-id="${job.id}" data-job-title="${job.title}">Apply Now</button>
        `;
        jobListContainer.appendChild(card);
    });
}

// Function to open the modal
function openModal(jobId, jobTitle) {
    document.getElementById('modal-job-title').textContent = `Apply for: ${jobTitle}`;
    document.getElementById('applied-job-id').value = jobId;
    submissionMessage.style.display = 'none'; // Hide success message on opening
    applicationForm.reset(); // Clear the form
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// --- Event Listeners ---

// 1. Initial Card Rendering
document.addEventListener('DOMContentLoaded', renderJobCards);

// 2. Open Modal when 'Apply' is clicked
jobListContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('apply-button')) {
        const jobId = event.target.dataset.jobId;
        const jobTitle = event.target.dataset.jobTitle;
        openModal(jobId, jobTitle);
    }
});

// 3. Close Modal handlers
closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// 4. Handle Form Submission (Simulated)
applicationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the form from submitting normally (reloading the page)

    const formData = new FormData(applicationForm);
    const applicationData = {};
    formData.forEach((value, key) => {
        applicationData[key] = value;
    });

    // Find the full job object
    const job = funnyJobs.find(j => j.id == applicationData.jobId);
    
    if (job) {
        applicationData.jobTitle = job.title;
        applicationData.company = job.company;
    }

    // --- Simulated Application Processing ---
    console.log("--- New Application Received (Simulated) ---");
    console.log("Job Applied For:", applicationData.jobTitle || 'N/A');
    console.log("Applicant Name:", applicationData.name);
    console.log("Applicant Email:", applicationData.email);
    console.log("Cover Letter Snippet:", applicationData.coverLetter.substring(0, 50) + "...");
    console.log("Full Data:", applicationData);
    console.log("-----------------------------------------");

    // Display success message and hide the form content
    submissionMessage.style.display = 'block';
    
    // Optional: Auto-close the modal after a few seconds
    setTimeout(closeModal, 4000);
});