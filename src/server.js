import cors from 'cors';
import express from 'express';
import { connectToDB } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("server is running successfully!");
})


connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})




// import http from 'http';

// const port = 3000;

// const server = http.createServer((req, res) => {
//     if (req.url === '/myself') {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");
//         res.write(`
// Resume
// Name: N.Leela Madhava Rao
// Email Id: leelamadhav.nulakani@gmail.com
// Mobile No: 9133603383
// Address: Door no. 1-17, Akkampeta, Jangareddygudem, Eluru District, AP-534447

// CAREER OBJECTIVE:
// To become a proficient Web Developer.

// ACADEMIC QUALIFICATION:
// 1. Institution: FIITJEE Junior college, Qualification: Intermediate, Academic Year: 2021-23, Percentage: 95.4%
// 2. Institution: Bharatiya Vidya Bhavan's, Qualification: SSC, Academic Year: 2020-21, Percentage: 79.2%

// PROFESSIONAL SKILL:
// - C
// - HTML
// - CSS
// - Javascript

// WORK EXPERIENCE:
// N/A

// PERSONAL DETAILS:
// Father's Name: Surya Bhaskara Rao
// Date of Birth: 19th October, 2005
// Gender: Male
// Nationality: Indian
// Marital Status: Single
// Languages Known: English, Telugu
// Hobbies: Listening to Music, Reading Books, Watching Anime

// Place: Bhimavaram
// Date: 06-08-2024
// N.Leela Madhava Rao
// SIGNATURE`);
//         res.end();
//     } else if (req.url === '/html') {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/html");
//         res.write(`
//     <div style="background-color: skyblue;color: brown;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;font-size: medium;font-weight: bolder;width: 60%;margin-left: 20%;">
//         <div style="margin: 5%;">
//             <h1 style="display: flex ;justify-content: center;text-decoration: underline;">Resume</h1>
//             <h3 style="display: flex ;justify-content: center;text-decoration: underline;">==============================================</h3>
//             <h4 style="display: flex;justify-content: center;"><b style="color:black;">Name: </b> N.Leela Madhava Rao</h4>
//             <h4 style="display: flex;justify-content: center;"><b style="color: black;">Email Id: </b>leelamadhav.nulakani@gmail.com</h4>
//             <h4 style="display: flex;justify-content: center;"><b style="color: black;">Mobile No: </b>9133603383</h4>
//             <h4 style="display: flex;justify-content: center;"><b style="color: black;">Address: </b> Door no. 1-17,Akkampeta,<br>Jangareddygudem,Eluru District,<br>AP-534447.</h4><br>
//             <h3 style="text-decoration: underline;color: black;">CAREER OBJECTIVE:</h3>
//             <P style="display: flex;justify-content: center;">To secure a position as a web developer where I can utilize my coding skills<br> and passion for creating user-friendly web experiences.</P><br><br>
//             <h3 style="text-decoration: underline;color: black;">ACADEMIC QUALIFICATION:</h3>
//             <center>
//                 <table  border="black" style='color:brown;font-weight:bold;font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;font-size: medium;'>
//                     <tr><th>Sno.</th>
//                         <th>Institution</th>
//                         <th>Qualification</th>
//                         <th>Academic Year</th>
//                         <th>Percentage</th>
//                     </tr>
//                     <tr>
//                         <td>1.</td>
//                         <td>FIITJEE Junior college</td>
//                         <td>Intermediate</td>
//                         <td>2021-23</td>
//                         <td>95.4%</td>
//                     </tr>
//                     <tr>
//                         <td>2.</td>
//                         <td>Bharatiya Vidya Bhavan's</td>
//                         <td>SSC</td>
//                         <td>2020-21</td>
//                         <td>79.2%</td>
//                     </tr>
//                 </table>
//             </center><br><br>
//             <h3 style="text-decoration: underline;color: black;">PROFESSIONAL SKILL:</h3>
//             <UL>
//                 <li>C</li>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>Javascript</li>
//             </UL>
//             <h3 style="text-decoration: underline;color: black;">WORK EXPERIENCE:</h3>
//             <P style="margin-left:5%;">N/A</P>
//             <h3 style="text-decoration: underline;color: black;">PERSONAL DETAILS:</h3>
//             <h4 ><b style="color: black;">Father's Name:  </b> Surya Bhaskara Rao</h4>
//             <h4><b style="color: black;">Date of Birth:  </b> 19th october , 2005</h4>
//             <h4><b style="color: black;">Gender:  </b> Male</h4>
//             <h4><b style="color: black;">Nationality:  </b> Indian</h4>
//             <h4><b style="color: black;" >Marital Status:  </b> Single</h4>
//             <h4><b style="color: black;">Languages Known:  </b> English,Telugu</h4>
//             <h4><b style="color: black;">Hobbies:  </b> Listening Music, Reading Books, Watching Anime</h4>
//             <p style="color: black;display: flex;justify-content: center;">I hereby declare that all the above knowledge are true to the best of my knowledge.</p><br>
//             <div style="display: flex;justify-content: space-between;">
//                 <div>
//                     <h4><b style="color: black;">Place:  </b> Bhimavaram</h4>
//                     <h4><b style="color: black;">Date:  </b> 06-08-2024</h4>
//                 </div>
//                 <div>
//                     <p>N.Leela Madhava Rao</p>
//                     <h2 style="color: black;">SIGNATURE</h2>
//                 </div>
//             </div>
//     </div>
// `);
//         res.end();
//     } else if (req.url === '/senddata') {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         const resume = {
//             name: "N.Leela Madhava Rao",
//             email: "leelamadhav.nulakani@gmail.com",
//             mobile: "9133603383",
//             address: "Door no. 1-17, Akkampeta, Jangareddygudem, Eluru District, AP-534447",
//             careerObjective: "To become a proficient Web Developer.",
//             academicQualifications: [
//                 {
//                     sno: 1,
//                     institution: "FIITJEE Junior college",
//                     qualification: "Intermediate",
//                     academicYear: "2021-23",
//                     percentage: "95.4%"
//                 },
//                 {
//                     sno: 2,
//                     institution: "Bharatiya Vidya Bhavan's",
//                     qualification: "SSC",
//                     academicYear: "2020-21",
//                     percentage: "79.2%"
//                 }
//             ],
//             professionalSkills: ["C", "HTML", "CSS", "Javascript"],
//             workExperience: "N/A",
//             personalDetails: {
//                 fathersName: "Surya Bhaskara Rao",
//                 dob: "19th October, 2005",
//                 gender: "Male",
//                 nationality: "Indian",
//                 maritalStatus: "Single",
//                 languagesKnown: ["English", "Telugu"],
//                 hobbies: ["Listening to Music", "Reading Books", "Watching Anime"]
//             },
//             declaration: "I hereby declare that all the above information is true to the best of my knowledge.",
//             place: "Bhimavaram",
//             date: "06-08-2024",
//             signature: "N.Leela Madhava Rao"
//         };
//         res.end(JSON.stringify({ resume }));
//     } else {
//         res.statusCode = 404;
//         res.end("Page Not Found\n");
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });



//     /* else if (req.method === 'POST' && req.url === '/recivedata') {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json");
//         let body = "";
//         req.on("data", (chunk) => {
//             body += chunk.toString();
//         });
//         console.log(body)
//         res.end()
//     } */

    