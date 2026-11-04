export default function About() {
  const skills = ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Git & GitHub', 'Node.js (Basic)'];

  return (
    <section>
      <h1>About Me</h1>
      <p>
        Hello! I am Russel O. Terrobias! An Information Technology third year student working on building modern web applications. 
        I enjoy solving problems, writing code, and learning new technologies.
      </p>
      
      <ul></ul>
      <h2>Draft Skill List</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}