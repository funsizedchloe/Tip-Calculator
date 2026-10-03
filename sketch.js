function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(122, 211, 255);
    
    // usesr input
    input = createInput();
    input.position(10, 60);
    
    textSize(24);
    text("Please type the number to calculate tip amount:", 10, 30);
    
    // 15% button
    let button1;
    button1 = createButton('15%');
    button1.position(input.x + input.width + 10, input.y);
    button1.mousePressed(() => tipCalculate(0.15));
    
    // 20% button
    let button2;
    button2 = createButton('20%');
    button2.position(input.x + input.width + button1.width + 10, input.y);
    button2.mousePressed(() => tipCalculate(0.20));
    
    // 25% button
    let button3;
    button3 = createButton('25%');
    button3.position(input.x + input.width + button1.width + button2.width + 10, input.y);
    button3.mousePressed(() => tipCalculate(0.25));
}

function tipCalculate(percent){//calculate % tip
    background(122, 211, 255);
    text("A " + percent * 100 + "% tip of $" + input.value() + " is: $" + (input.value() * percent).toFixed(2), 10, 110);
    text("Please type the number to calculate tip amount:", 10, 30);
}