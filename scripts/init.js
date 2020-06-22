const init = () => {
    const localStorage = window.localStorage;
    localStorage.clear();
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    let count = '0';
    localStorage.setItem("count", count);
    localStorage.setItem("randomNumber", `${randomNumber}`);
    const offset = 10;

    const drawBoard = (n, maxWidth, maxHeight) => {
      var canvas = document.getElementById("graph");
      var context = canvas.getContext("2d");
      canvas.height = maxHeight;
      canvas.width = maxWidth;
      const count1 = parseInt(localStorage.getItem("count")) + 1;
      localStorage.setItem("count", `${count1}`);
      const random1 = parseInt(localStorage.getItem("randomNumber"));
      const n1 = parseInt(n);

      context.font = "bold 20px sans‑serif";
      //context.textAlign = "start";
      context.textBaseline = "middle";

      const fill_style =
        n1 === random1
          ? "rgba(250, 0, 0)"
          : "rgba(150, 150, 250)";
      context.fillStyle = fill_style;
      context.fillRect(offset, offset, maxWidth, maxWidth);

      const fill_Style =
        n1 === random1
          ? "rgba(150, 150, 250)"
          : "rgba(230, 230, 230)";
      context.fillStyle = fill_Style;

      const fill_text =
        n1 === random1
          ? `YOU MAKE IT！ tried ${count1} times`
          : n1 > random1
            ? "HIGH！， try LOWER"
            : "LOW！， try HIGHER";
      context.fillText(fill_text, 2 * offset, 3.5 * offset);

      if (n1 === random1) {
        newStart();
      }
    }

    const newStart = () => {
        let addButton = document.getElementById("info");
        if (addButton.childNodes[0]) {
            addButton.removeChild(addButton.childNodes[0]);
        }
        let btn1 = document.createElement("button");
        btn1.innerHTML = "NEW GAME";
        addButton.appendChild(btn1);
        // btn1.setAttribute("onclick", "init()");
        btn1.addEventListener("click", () => {
          window.location.reload(false);
        })
    }


    $('.myForm').on('submit', '#login1', function(event) {
      event.preventDefault()
      var inputs = $(":input")
      var obj = {}
      inputs.each( function() {
        obj[this.name] = $(this).val()
      })
      const n = obj.number;
      drawBoard(n, 310, 60);
    })

  };