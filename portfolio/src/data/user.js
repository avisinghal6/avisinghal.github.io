const INFO = {
  main: {
    title: "Avi Singhal",
    name: "Avi Singhal",
    email: "avisinghal6@gmail.com",
    logo: process.env.PUBLIC_URL + "/images/as.png",
  },
  homepage: {
    detail: `I am an aspiring machine learning engineer with strong foundations in ML,DL and NLP, 
		substantiated by practical projects and enriched by my industry experience. 
		I am passionate about problem-solving and like to work on challenging problems which require novel thinking
    and solutions. I keep myself updated with latest research, I am quick at ramping to new technologies and love to consistently 
    upskill myself.
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
    subtitle: "ML Model Development Engineer",
    description: `
			I am Avi Singhal, I am currently working as a ML Development Engineer at Tetramem Inc. My work includes developing and implementing novel quantization methods and model compression techniques. 
      I am developing an adaptive quantizer that supports float fallback when the integer computations lead to low accuracy, adding support for quantization of vision transformers. I am working on neural architecture search
			and model development and training for object, face detection related tasks. I am working on the development of hybrid CNN and state space (MAMBA) models to further achieve better performance.
			I am also working on model development and training of Tiny LLMs. I like to optimize existing programs and develop novel solutions
      for challenging problems. I am also adding more parallelism to existing code base to improve performance.
      I prefer to work outside my comfort zone because thats when I feel I am learning the most.
			

		`,
    description2: `Apart from the ML side, I also have experience developing web applications, and I enjoy back-end development primarily because
	I like working on different technologies and deployment schemes. I have developed many web applications and also deployed them 
	(more details in project section). I tend to follow good coding practices and write code that is easy to understand and
	scale. I am passionate about optimizing the work flows and processes, I try to improve the current methods and even create
	new ones to enhance productivity. I am quick at acquiring new skills and can adapt to a dynamically changing 
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
      description: `Created an adaptive batch creation algorithm to create new batches using near neighbors of samples with highest gradients from previous batch like the paper from ICLR 2016. Attained ~5% faster convergence compared to random batches.`,
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
      description: `Built and trained a decoder only transformer inspired by ChatGPT, from scratch with only attention layers. Analyzed attention scores via heatmaps, revealing insights including copying mechanism, skip gram behavior in ~30% attention heads.`,
      logo: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/the-transformers-the-movie.jpg",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/Transformer-Training",
    },
    {
      title: "Recipe Generation from Videos ",
      description: `Engineered a recipe generation pipeline leveraging pretrained models. Executed parallel dense video captioning for event proposals, reduced redundancy with cosine similarity and elevated image analysis of frames using YOLO, harnessed BLIP for image captioning, Resnet for frame-to-feature conversion. Employed ChatGPT for concise caption summarization.Evaluated performance with BERTScore, obtaining commendable results despite absence of model training with latency ~5s`,
      logo: "https://repository-images.githubusercontent.com/388517773/326b4c61-e461-4356-a537-b4a2aa61b5d7",
      linkText: "View Project",
      link: "https://github.com/avisinghal6/VIDEO_CAPTIONING_PIPELINE",
    },
    {
      title: "Video Conferencing Application ",
      description: `Designed a video conferencing application using React.js for front-end and Express.js for backend using Socket.io, WebRTC. Incorporated functionality for audio muting, disabling video, screen sharing, and 5+ unique features being added.`,
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
