const instructorWithLongestName = function(instructors) {
    let longestName = [{name: null, course: null}]
    let shorterNames = []
    let i = 0;
        while (i < instructors.length) { 
            if (longestName[0].name === null) {longestName.unshift(instructors[i])
            } else if (instructors[i].name.length > longestName[0].name.length) 
            { longestName.unshift(instructors[i])
            } else { shorterNames.push(instructors[i])}
            
            ++i
        }
    return longestName[0];
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));
