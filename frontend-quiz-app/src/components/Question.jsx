function Question() {
  return (
    <div className="hidden">
      {/* this div is for showing the question */}
      <div>
        <div>
          <h1>Question 6 of 10</h1>
          <h2>What does HTML stand for?</h2>
        </div>
        {/* this div is for progress bar */}
        <div></div>
      </div>
      {/* this div is for showing the options */}
      <div>
        <button>Hyper Text Markup Language</button>
        <button>High Text Markup Language</button>
        <button>Hyper Text Marking Language</button>
        <button>High Text Marking Language</button>
        <button>Submit Answer</button>
      </div>
    </div>
  );
}

export default Question;
