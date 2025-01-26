/* Global Styles */
body {
  margin: 0;
  padding: 0;
  font-family: "Special Elite", "Roboto", sans-serif;
  background-color: #000;
  color: #fff;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Animations */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Title Styling */
#global-title h1 {
  font-size: 5em;
  color: #e94560;
  animation: blink 1.5s infinite;
  text-shadow: 0 0 10px #e94560, 0 0 20px #ff5f7e;
  margin-top: 20px;
}

/* Intro Content */
.intro-content h2,
.intro-content h1 {
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border: 2px solid #e94560;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  max-width: 800px;
}

.intro-content h1 {
  margin-top: 20px;
  font-size: 2em;
}

.intro-content .button {
  margin-top: 20px;
  display: inline-block;
  padding: 15px 30px;
  background-color: #e94560;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.5em;
  cursor: pointer;
  text-align: center;
}

.intro-content .button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px #e94560;
}

/* Quiz */
#quiz {
  margin: 20px auto;
  text-align: center;
}

#answers button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#answers button:hover {
  background-color: #e94560;
}

/* Hidden Page Handling */
.page {
  display: none;
}

.page.active {
  display: block;
}
