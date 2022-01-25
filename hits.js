function dynamic(){
    let max = null
    let min = null
    for (var i = 0; i < test.length; i++) {
        const data = test[i]
        const y_ = data.hits

        if(data.name_p == "MRU"){
            continue;
        }

        if(y_ > max || max == null){
            max = y_
        }

        if(y_ < min || min == null){
            min = y_
        }

        
    }
    
    return [min-10000, max+10000]
}

let parseDate = d3.timeFormat("%Y-%m-%d %H:%M:%S.%L");

var INTER = 0;

var range_X = 4000; // 64000
//var range_Y = 1100000;
var POLICIES = {}
var current_zoom = 1;
// -----------------------------------------------------------

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 30, left: 70 },
    width = 1200 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom; //550

// append the svg object to the body of the page
var view = d3.select("#dataviz")
var svg = view.append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
       
/*
let xScale = d3.scaleLinear()
        .domain([1000, 32000])
        .range([0, width-150]);
*/




let xScale = d3.scaleOrdinal()
   .domain([1000,2000,4000,8000,16000, 32000])
   .range([0, 200, 400, 600, 800, 1000]);

let yScale = d3.scaleLinear()
        .domain(dynamic()) // .domain([500000, range_Y])
        .range([height, 0]);

let xAxis = d3.axisBottom(xScale).ticks(10)


svg.append('g')
    .attr('transform', 'translate(0,' + (height) + ')')
    .call(xAxis);

let yAxis = d3.axisLeft(yScale).ticks(10)
svg.append('g')
    .call(yAxis);



function main(){
    /// ----------------------- TEXTs 
    svg.append("text")
    .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom) + ")")
    .style("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .text("Buffer Size");

    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("font-family", "sans-serif")
    .text("Hits");

    createtooltip();
    let count_p = 0;

    for (var i = 0; i < test.length; i++) {
        var data = test[i]
        var name_d = data.name_p
        var buffer_size = data.buffer_size
        var hits = data.hits
        var writes = data.writes
        var time = data.time

        var Y = hits

        if (POLICIES[name_d] == undefined) {
            POLICIES[name_d] = {
                name: name_d,
                color: color_by_name(name_d),
                last_x:buffer_size,
                last_y:Y
            }
            
            create_legends(name_d);
            append_data(name_d, buffer_size, Y, color_by_name(name_d),-1,-1);
        }else{
            append_data(name_d, buffer_size, Y, color_by_name(name_d),  POLICIES[name_d].last_x, POLICIES[name_d].last_y);
            POLICIES[name_d].last_x = buffer_size
            POLICIES[name_d].last_y = Y
        }
    }
    console.log("count_p", count_p);
}


function append_data(name, x, y, color, last_x, last_y) {
    if(last_x < 0 || last_y < 0){
        last_x = xScale(x)
        last_y = yScale(y)
        
    }else{
        last_x = xScale(last_x)
        last_y = yScale(last_y)
    }
    //console.log(x, y, color, last_x, last_y)
        
        const circle = svg.append('circle')
            .attr("fill", color)
            .attr('cx', xScale(x))
            .attr('cy', yScale(y))
            .attr('r', 3.5)
            .attr('class', "circulo t" + name)


        const line = svg.append("line")
            .attr("fill", "none")
            .attr("stroke", color)
            .attr("stroke-width", 2)
            .attr("x1", last_x)
            .attr("y1", last_y)
            .attr("x2", xScale(x))
            .attr("y2", yScale(y))
            .attr('class', "linha t" + name)
        
        
        line.on("mouseover", function(d) {
                d3.select(this).style("stroke-width", 4)
               
                showTooltip(name + ": " + y, d3.mouse(this)[0], d3.mouse(this)[1], color,d)
            }).on("mouseout", function(d) {
                d3.select(this).style("stroke-width", 2)
               
                hideTooltip()
            })

        circle.on("mouseover", function(d) {
                d3.select(this).attr('r', 5)
               
                showTooltip(name + ": " + y, d3.mouse(this)[0], d3.mouse(this)[1], color,d)
            }).on("mouseout", function(d) {
                d3.select(this).attr('r', 3.5)
               
                hideTooltip()
            })
        
        
}


function create_legends(policy){
    


    const x_lenged = width-70; 
    // Add one dot in the legend for each name.
    const circle = svg.append("circle")
    .attr("cx", x_lenged)
    .attr("cy", INTER * 18) 
    .attr("r", 5)
    .style("fill", POLICIES[policy].color)

// Add one dot in the legend for each name.
    svg.append("text")
    .attr("x", x_lenged + 10)
    .attr("y", INTER * 18) 
    .style("fill", POLICIES[policy].color)
    .text(policy)
    .attr("text-anchor", "left")
    .style("alignment-baseline", "middle")
    .attr('class', "text" + policy)
    .attr('opacity', 0.5)
    /*
    circle.on("mouseover", function(d) {
        d3.select(this).attr('r', 7)
 
     
        d3.selectAll(".linha").attr('opacity', 0.1)
        d3.selectAll(".circulo").attr('opacity', 0.1)

        d3.selectAll(".t"+policy).attr('opacity', 1)
   
    }).on("mouseout", function(d) {
        d3.select(this).attr('r', 5)

        //d3.selectAll(".t"+policy).attr('opacity', 1)

        d3.selectAll(".linha").attr('opacity', 1)
        d3.selectAll(".circulo").attr('opacity', 1)

    })
    */
    circle.on("click", function(d) {
        const raio = d3.select(this).attr('r')
        if (raio == 5) {
            d3.selectAll(".t"+policy).attr('opacity', 1)
            d3.select(this).attr('r', 7)
            d3.selectAll(".text"+policy).attr('opacity', 1)
        }else{
            d3.selectAll(".t"+policy).attr('opacity', 0.1)
            d3.select(this).attr('r', 5)
            d3.selectAll(".text"+policy).attr('opacity', 0.5)
        }

    })

    INTER++;
}


function color_by_name(name){
    if (name == "ADLRU"){
        return "steelblue"
    }
    else if (name == "AMLRU"){
        return "red"
    }
    else if (name == "ARC"){
        return "darkorange"
    }
    else if (name == "CCCFLRU"){
        return "darkgreen"
    }
    else if (name == "CCFLRU"){
        return "darkred"
    }
    else if (name == "CFDC"){
        return "darkmagenta"
    }
    else if (name == "CFLRU"){
        return "darkviolet"
    }
    else if (name == "CLOCK"){
        return "darkgoldenrod"
    }
    else if (name == "F2Q"){
        return "darkkhaki"
    }
    else if (name == "FBR"){
        return "darkolivegreen"
    }
    else if (name == "FIFO"){
        return "darkseagreen"
    }
    else if (name == "GASA"){
        return "DimGrey"
    }
    else if (name == "GCLOCK"){
        return "CornflowerBlue"
    }
    else if (name == "LFU"){
        return "GoldenRod"
    }
    else if (name == "LFUDA"){
        return "HotPink"
    }
    else if (name == "LIRS"){
        return "Indigo"
    }
    else if (name == "LLRU"){
        return "LightSeaGreen"
    }
    else if (name == "LRU"){
        return "LightSalmon"
    }
    else if (name == "LRUK"){
        return "Sienna"
    }
    else if (name == "LRUMIS"){
        return "SkyBlue"
    }
    else if (name == "LRUWSR"){
        return "Teal"
    }
    else if (name == "MQ"){
        return "YellowGreen"
    }
    else if (name == "MRU"){
        return "Yellow"
    }
    else if (name == "SCMBP"){
        return "Chocolate"
    }
    else if (name == "CASA"){
        return "Aqua"
    }
    else if (name == "BELADY"){
        return "grey"
    }

    return "black"
}




//append_vertical_line(100,"TEST","red")


function showTooltip(text, x, y, color,) {
    //console.log(link_data);
    let tooltip = d3.select("#tooltip");


    tooltip.select("#tt").text(text);

    tooltip
        .style("border", "2px solid " + color)
       // .style("left", x + (margin.left - (tooltip.node().getBoundingClientRect().width / 2)) + "px")
       .style("left",  x + "px")
       .style("top",   y + "px")
        .style('visibility', "visible")
        .classed("hidden", false)
}

function hideTooltip() {
    d3.select("#tooltip")
        .classed("hidden", true)
        .style('visibility', "hidden")
}


function createtooltip() {
    // d3.select("#tooltip").remove();
    view
        .append("div")
        .attr("id", "tooltip")
        .style('visibility', "hidden")
        //.style('visibility', "visible")
        // .classed("hidden", false)
        .style("left", "0px")
        .style("top", "0px")
        .style("position", "absolute")
        .style("cursor", "default")
        //.style("border-radius","25px")
        .style("background", "white")
        .style("background-position", "left top")
        .style("background-repeat", "repeat")
        .style("padding", "3px")
        // .style("width", "400px")
        // .style("height", "250px")
        .style("border", "2px solid darkcyan")
        //.append("p")
        .html("<span style='font-size: 12px' id='tt'></span>")
        //.append("p")

}


main();
d3.selectAll(".linha").attr('opacity', 0.1)
d3.selectAll(".circulo").attr('opacity', 0.1)