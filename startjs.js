

function changeContent(contentName, containerName) {
    console.log("contentName= ", "containerName=" )
    let content;
    if (contentName === 'home' ) {
        content = `
        <div class="header-text col-lg-9 col-sm-12">
        <p>Data analysis is a process of inspecting, cleansing,
         transforming and modeling data with the goal of 
         discovering useful information, informing conclusions 
         and supporting decision-making. Data analysis has multiple 
         facets and approaches, encompassing diverse techniques under a
          variety of names, and is used in different business, science, and
           social science domains. In today's business world, data analysis plays 
           a role in making decisions more scientific and helping businesses operate more effectively.</p>
    </div>
        `;
    } else if (contentName === 'about') {
        content = `
        <div class="header-text col-lg-9 col-sm-12">                  
        <p >A database is an organized collection of data, generally stored and accessed
            electronically from a computer system. Where databases are more complex they are 
            often developed using formal design and modeling techniques. The database management 
            system (DBMS) is the software that interacts with end users, applications, and the 
            database itself to capture and analyze the data. The DBMS software additionally encompasses
            the core facilities provided to administer the database. The sum total of the database,
            the DBMS and the associated applications can be referred to as a "database system".
            Often the term "database" is also used to loosely refer to any of the DBMS, 
            the database system or an application associated with the database.</p>
        </div>
                    `;
    } else if (contentName === 'contact') {
        content = `
        <div class="header-text col-lg-9 col-sm-12">
            <p> A computer programmer,sometimes called a software developer, a programmer or more recently 
            a coder (especially in more informal contexts), is a person who creates computer software. 
            The term computer programmer can refer to a specialist in one area of computers, 
            or to a generalist who writes code for many kinds of software.</p>
                </div>
                    `;
    } else {
        content = `
    <div class="header-text col-lg-9 col-sm-12">
        <p> No content found...</p>
            </div>
                `
    }
    document.getElementById(containerName).innerHTML = content;
}

console.log(changeContent("home"));