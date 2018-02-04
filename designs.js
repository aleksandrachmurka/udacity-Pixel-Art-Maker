// variables
let height = "";
width = "";
canvas = "";
pixelColor = "";
pickedColor = "";

// function that makes grid - table with white cells
function makeGrid(event) {
	event.preventDefault();
	canvas = "";
	$('#pixel_canvas').empty();

	height = $("#input_height").val();
	width = $("#input_width").val();

	for(let i = 1; i<=height; i++) {
		canvas += "<tr>";
		for (let j = 1; j<= width; j++) {
			canvas += "<td></td>";
		}
		canvas += "</tr>\n";
	}
	$('#pixel_canvas').append(canvas);
	$('#pixel_canvas').css("background-color", "white");
}

$(".grid").on('click', makeGrid);

// function changing colour of all cells to white
function clearCanvas() {
	$("td").each(function() {
      $(this).css("background-color", "white");
    });
}

$(".clear").on("click", clearCanvas);

// function changing colour of all cells to picked color
function bucket() {
	pickedColor = $("#colorPicker").val();
	$("td").each(function() {
      $(this).css("background-color", pickedColor);
    });
}

$(".bucket").on("click", bucket);

//rgb to hex converter
function rgb2hex(rgb){
	rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 	return (rgb && rgb.length === 4) ? "#" +
	("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


// function changing color of a single cell by clicking
// option of switching colour back to white works occassionaly- in progress of fixing
function changeColor() {
	pixelColor = $("td").css("background-color");
	pickedColor = $("#colorPicker").val();
	if (rgb2hex(pixelColor) === pickedColor){
		$(this).css("background-color", "white");
	}
	else {
		$(this).css("background-color", pickedColor);
	}
}

$("#pixel_canvas").on("click", "td", changeColor);
