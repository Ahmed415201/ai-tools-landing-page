function generate() {
  const task = document.getElementById("task").value;
  const input = document.getElementById("inputText").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.innerText = "Please enter some details.";
    return;
  }

  output.innerText = "Generating AI response...";

  setTimeout(() => {
    if (task === "email") {
      output.innerText = 
        "Subject: Business Update\n\nDear Client,\n\n" +
        "We are pleased to inform you that " + input +
        ". Please let us know if you need any further assistance.\n\nBest regards,\nTeam";
    }

    if (task === "report") {
      output.innerText =
        "Business Report:\n\n" +
        "This report outlines key insights regarding " + input +
        ". The analysis shows positive growth and opportunities for optimization.";
    }

    if (task === "summary") {
      output.innerText =
        "Summary:\n\n" +
        input.substring(0, 150) + "...";
    }
  }, 1200);
}
