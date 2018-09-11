import main from "./main";

document.addEventListener("DOMContentLoaded", function() {
  console.log("document load");
  try {
    main();
  } catch (e) {
    console.info(e);
  }
});
