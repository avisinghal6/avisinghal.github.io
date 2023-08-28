const INFO = {
  main: {
    title: "Avi Singhal",
    name: "Avi Singhal",
    email: "avisinghal6@gmail.com",
    logo: process.env.PUBLIC_URL + "/images/as.png",
  },
  homepage: {
    detail: `I am an aspiring software/machine learning engineer with strong foundations in ML,DL and NLP, 
		substantiated by practical projects and enriched by my industry experience. 
		I am proficient in data structures and algorithms, and passionate about problem-solving. 
		Additonally, I excel in MERN stack web development and am known for tackling intricate challenges
		`,
    detail2: `I strongly believe in 'Skills can be nurtured with opportunity, but an open mind, insatiable hunger for
		 learning, and a tenacious attitude are the forge that shapes the truly exceptional.' `,
  },
  socials: {
    github: "https://github.com/avisinghal6",
    linkedin: "https://www.linkedin.com/in/avi-singhal99",
    leetcode: "https://leetcode.com/avisinghal6/",
  },
  about: {
    title: "A bit more about me!",
    subtitle: "MCS at Rice University",
    description: `
			I am Avi Singhal, I am currently pursuing MS in Computer Science with a specialization in machine learning at Rice
			University. I have undertaken extensive coursework related to the state-of-art technologies and have completed numerous
			projects to put those skills at practical applications and thereby strengthening my skills. I have grown from a novice 
			in this field to a professional in a relatively small span of time, I am now someone who can handle, complete and lead projects
			independently in an efficient manner. I have strong foundations in data structures and algorithms, and enjoy solving
			complex problems, I am proficient in java, python and c++. I prefer to work outside my comfort zone because thats when I feel I am 
			learning the most. I have worked extensively on computer vision, NLP, DL and ML applications. I have experience 
			developing models, frameworks and pipelines for production release. I also have experience working on the ML compiler. I gained 
			industry experience in ML during my software/ML internship at Tetramem (more details in the experience section.).
			Apart from the ML side, I also have experience developing web applications, and I enjoy back-end development primarily because
			I like working on different technologies and deployment schemes. I have developed many web applications and also deployed them 
			(more details in project section). I tend to follow good coding practices and write code that is easy to understand and
			scale. I am passionate about optimizing the work flows and processes, I try to improve the current methods and even create
			new ones to enhance productivity.

		`,
    description2: `I believe in order for someone to write truly efficient software, its necessary to understand the underlying hardware and its
		limitations as well. I completed my undergrad in electronics and communication and hence possess the necessary hardware background
		as well which enables to me to write efficient code for specific hardware when needed. I also worked for Texas Instruments
		for a year after my undergrad before starting my Masters. Working at TI enabled me to work across teams and countries to 
		deliver the product. It helped me improve my time management and collaboration skills. `,

    description3: `I am now looking for opportunities where I can leverage my skills and deliver value to the company
		and at the same time have a continuous growth by acquiring new skills. I believe I have the skills and the positive attitude required 
		for excelling in the software/ML domain, I am quick at acquiring new skills and can adapt to a dynamically changing 
		environment.
		`,
  },
  education: {
    title: "My Education History",
    description: `
		I am currently pursuing a MS in Computer Science with specialization in Machine Learning at Rice University. 
		I am expected to graduate in December 2023. Previously I attended Delhi Techological University in India, where I earned 
		a Bachelor of Technology in Electronics and Communication. 
		I have strong foundations in both the software and the hardware side. I have done numerous projects(details in projects section)
		to gain hands on experience and to showcase my skills and knowledge.
		`,
    coursework1: `Software Engineering, Machine Learning, Deep Learning for Vision and Language, Machine Learning With Graphs
		,Probabilistic Algorithms and Data Structures, Project Management, Graduate Design and Analysis of Algorithms,
		Computer Architecture.
		`,
    coursework2: `Web Development, Pattern Recogntion, Embedded Systems, Algorithmic Toolbox, Data Structures, Programming
		Fundamentals, Microprocessors and Interfacing, Control Systems.
		`,
  },

  experience: {
    title: "My Work Experience",
    description: `My industry experience gave me the opportunity to work on various projects and in different roles which helped me 
			improve and increase my skillset. I got the opportunity to drive my projects and deliver value to the company. I have worked
			with different teams and across countries to deliver my projects and it helped me strength my collaboration and time
			management skills. `,
  },
  projects: [
    {
      title:
        "Adaptive Learning with Dynamic Batch Creation Using Near-Neighbors",
      description: `Created new batches using near neighbors of samples with highest gradients similar to the paper from ICLR 2016. Achieved faster train/val convergence compared to random batches for convex cases.`,
      logo: "https://miro.medium.com/v2/resize:fit:846/1*und5wL5DogTb8zkyOaFmrA.png",
      linkText: "View Project",
      link: "https://github.com/strankid/580-Project",
    },
    {
      title: "Graph Based Recommender System",
      description: `Performed comparative analysis based on scalability, precision, latency on Youtube dataset using: Pixie Random
			Walk(PRW), Random walk based embeddings and link prediction without GNN with the latter outperforming all methods.`,
      logo: "https://www.joinideas.org/wp-content/uploads/2017/06/image001-1.png",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/Graph-based-Recommender-System",
    },
    {
      title: "Mechanistic Interpretability of Transformers",
      description: `Built and trained a decoder only transformer inspired by Chatgpt, from scratch with only attention layers. Plotted attention
			scores of keys and queries using heatmaps, observed some copying mechanism, skip gram behavior in a few attention heads.`,
      logo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/the-transformers-the-movie.jpg",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/Transformer-Training",
    },
    {
      title: "Recipe Generation from Videos ",
      description: `Built a recipe generation pipeline leveraging pretrained models. Implemented parallel dense video 
	  captioning for event proposals, reduced redundancy with cosine similarity. Enhanced the frames using YOLO, 
	  harnessed BLIP for image captioning, Resnet for frame-to-feature conversion. Employed BARD,Chatgpt for concise caption
		summarization.`,
      logo: "https://repository-images.githubusercontent.com/388517773/326b4c61-e461-4356-a537-b4a2aa61b5d7",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/VIDEO_CAPTIONING_PIPELINE",
    },
	{
		title: "Video Conferencing Application ",
		description: `Designed a video conferencing application using React.js for the front-end and Express.js for the 
		backend using Socket.io and WebRTC. Incorporated functionality for audio muting, disabling video, screen sharing, 
		and more features being added`,
		logo: "https://builtin.com/sites/www.builtin.com/files/styles/og/public/video-conferencing-software.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Video-Conference-WebApp",
	  },
	  ,
	{
		title: "Social Media Website ",
		description: `Developed social media platform using MERN stack and HTML, CSS. Implemented authentication using
		multiple strategies from passport.js. Incorporated creation, deletion of posts, comments, likes, friend requests and
		personal real-time chat rooms`,
		logo: "https://wpcom.files.wordpress.com/2021/06/924330_featured-image-for-wordpress-com_121820.png",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Social-media-website",
	  },
	  {
		title: "Personal Website ",
		description: `My personal website(this website) built using React and deployed with Github pages.`,
		logo: "https://static.vecteezy.com/system/resources/previews/009/317/397/original/personal-website-icon-logo-illustration-portfolio-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/avisinghal.github.io",
	  },
	  {
		title: "URL Shortener ",
		description: `Shortening a URL, adding a browser extension, QR code for url shortening and other features. Project under
		development.`,
		logo: "https://www.clickslice.co.uk/wp-content/uploads/2022/07/1_Pdw7h5X6vQQNVopIzHBG6A.jpeg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/URL_Shortener",
	  },
	  {
		title: "Meta-heuristic Optimization for DC motor position control",
		description: `Optimization of DC motor position control using meta-heuristic algorithms. I present a comparative analysis
		of various algorithms and methods, work is published at Springer.`,
		logo: "https://www.electronics-lab.com/wp-content/uploads/2021/10/003-2.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Meta-Heuristic-Optimization-for-DC-motor-position-control",
	  },	
	  {
		title: "Meta-heuristic Optimization for cruise control",
		description: `Optimization of cruise control using meta-heuristic algorithms. My work beats prior work and is published 
		at IEEE.`,
		logo: "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220512171944/Cruise-control-1-1160x653.jpg",
		linkText: "View Project",
		link: "https://github.com/avisinghal6/Meta-Heuristic-Optimization-for-Cruise-Control",
	  },	
  ],
  publications: {
    title: "My Publications",
    description: `My research during my undergrad lead to publications in IEEE and Springer. I have worked extensively on meta-
	heuristic optimization. `,
  },
  opensource: {
    title: "Open Source",
    description: `I have made open source contributions to various libraries, it helped me get used to large code base
	and get into the open source community.`,
  },
};

export default INFO;
