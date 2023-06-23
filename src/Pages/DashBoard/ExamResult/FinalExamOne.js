import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FinalExamOne = () => {
    const students = useLoaderData();
    // console.log(students);
    let totalMarks = 0;

    for (let i = 0; i < students.length; i++) {
        const marks = parseInt(students[i].number);
        totalMarks += marks;
    }

    // console.log("Total Marks:", totalMarks);

    students.forEach(item => {
        if (item.number >= 80) {
            item.grade = "A+";
            item.gradePoint = 5.00;
        } else if (item.number >= 75) {
            item.grade = "A";
            item.gradePoint = 4.00;
        } else if (item.number >= 70) {
            item.grade = "A-";
            item.gradePoint = 3.50;
        } else if (item.number >= 65) {
            item.grade = "B";
            item.gradePoint = 3.25;
        } else if (item.number >= 50) {
            item.grade = "C";
            item.gradePoint = 2.00;
        } else {
            item.grade = "D";
            item.gradePoint = 1.00;
        }
    });

    // console.log(data);

    let totalGradePoints = 0;

    students.forEach(item => {
        totalGradePoints += item.gradePoint;
    });

    // console.log("Total Grade Points:", totalGradePoints);

    const averageGradePoints = totalGradePoints / students.length;



    const mainPoint = averageGradePoints;

    let grade;

    if (mainPoint === 5.00) {
        grade = "A+";
    } else if (mainPoint >= 4.00) {
        grade = "A";
    } else if (mainPoint >= 3.50) {
        grade = "A-";
    } else if (mainPoint >= 3.25) {
        grade = "B";
    } else if (mainPoint >= 2.00) {
        grade = "C";
    } else if (mainPoint >= 1.00) {
        grade = "D";
    } else {
        grade = "F";
    }

    return (
        <div>
            <div>
                <div>
                    <h1 className='text-2xl mt-20 mb-10 font-bold text-center'>First Term Final</h1>
                </div>
                <div className='px-32 '>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-solid border-2 border-indigo-600">
                            <thead className="text-xs border-b text-gray-900 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Subject
                                    </th>
                                    <th scope="col" className="px-6 text-right py-3">
                                        Marks
                                    </th>
                                    <th scope="col" className="px-6 text-right py-3">
                                        Grade
                                    </th>
                                    <th scope="col" className="px-6 text-right py-3">
                                        Points
                                    </th>
                                </tr>
                            </thead>
                            {
                                students.map(student =>
                                    <tbody className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {student.subject}
                                            </th>
                                            <td className="px-6 text-right py-4 ">
                                                {student.number}
                                            </td>
                                            <td className="px-6 text-right py-4">
                                                {student.grade}
                                            </td>
                                            <td className="px-6 text-right py-4">
                                                {student.gradePoint}
                                            </td>
                                        </tr>
                                    </tbody>

                                )
                            }
                            <thead className="text-xs border-b text-gray-900 uppercase dark:text-gray-400 ">
                                <tr>
                                    <th scope="col" className="px-6 text-right  py-3">

                                    </th>
                                    <th scope="col" className="px-6 text-right py-3">
                                        Total Marks: {totalMarks}
                                    </th>

                                    <th scope="col" className="px-6 text-right  py-3">
                                        Grade:  {grade}
                                    </th>
                                    <th scope="col" className="px-6 text-right py-3">
                                        Points: {averageGradePoints}
                                    </th>
                                </tr>
                            </thead>

                        </table>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default FinalExamOne;