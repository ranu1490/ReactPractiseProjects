import React from 'react'

const Experience = () => {
  return (
    <section id="expirence" className="expirence">
        <div className="heading">
            <span>Experiences and Qualifications</span>
            <hr/>
        </div>
        <div className="info">
            <div className="card">
                <div className="box">
                    <h3>B.Tech, Information Technology</h3>
                    <p><i>Bharati Vidyapeeth College of Engineering for Women, Pune</i></p>
                    <span><p>Year 2018 - Year 2022</p></span>
                    <p style={{textAlign: "justify"}}>As an undergraduate student, I have a good understanding of web development technologies such as HTML, CSS, JavaScript, and React JS. Additionally, I'm proficient in backend technologies such as ASP.Net and SQL Server. I also have skills in C++, python, java and problem-solving using Data structures and Algorithms.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <h3>Web Development Intern</h3>
                    <p><i>Capgemini Technology Services India Limited</i></p>
                    <span><p>03/2022 - 06/2022</p></span>
                    <p style={{textAlign: "justify"}}>Learnt to work and coordinate with team. Did projects using ASP .NET Web API, Angular, ASP .NET MVC, Microsoft SQL Server, and attempt BootCamp.</p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <h3>Full Stack Development</h3>
                    <p><i>Synechron Technologies Pvt. Ltd.</i></p>
                    <span><p>05/2023 - Present</p></span>
                    <p style={{textAlign: "justify"}}>I have been a part of Synechron for the past five months, during which I had the opportunity to gain
                        proficiency in FULL-STACK WEB DEVELOPMENT. I completed a comprehensive three-month training program, which
                        encompassed in-depth learning in Core Java, React, Spring Boot, Hibernate, My-Sql, Java8, Angular and the practical
                        application of these skills through project development.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience