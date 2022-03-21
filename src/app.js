// Part 2
function log_element() {
    console.log(document.querySelector('p'))
}

log_element()


// Part 3

const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
function scholarship_list(list_students) {
    const studentsScholarship = []
    for (const student of list_students) {
        const average = average_grades(student)
        if (is_scholarship(average)){
            studentsScholarship.push({name: student.name, gradeAvg: average})
        }
    }
    return studentsScholarship
}

function average_grades(student) {
    let acc = 0
        for (const grade of student.grades){ // Sum student's grades
        acc += grade
        }
    const average = acc/student.grades.length
    return average
}

function is_scholarship(average) {
    return average > 80
}

console.log(scholarship_list(students))

// part 4
function dark_theme(){
    const dark_mode = document.querySelector('.light-theme')
    
    return dark_mode.classList.toggle("dark-theme")
}
dark_theme()