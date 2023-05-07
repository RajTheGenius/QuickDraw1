array_1=['pen','paper','book','bottle'];
random_no = Math.floor((Math.random()*array_1.length)+1);
console.log(array_1[random_no]);

sketch = array_1[random_no];

document.getElementById("drawn").innerHTML = "Sketch to be drawn" + sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;