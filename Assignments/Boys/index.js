let a = +prompt("Please Enter Your Employe ID Here");

let boys = {
  one: {
    employeId: 1501,
    Name: "Shaikh Azeem",
    location: "Nanded",
    position: "Front-End Developer",
    contact:"+918623038879",
    experience: "5 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 50000,
    description:
      "Azeem is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Azeem loves to solve problems and continuously improve his skills.",
    imagee:
      "./images/Screenshot 2024-07-30 221703.png",
  },
  two: {
    employeId: 1502,
    Name: "Mohammed yaser",
    location: "Mumbai",
    position: "Front-End Developer",
    contact:"+91 70587 33358",
    experience: "6 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 60000,
    description:
      "Yaser is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Yaser loves to solve problems and continuously improve his skills.",
    imagee:
      "https://img.freepik.com/premium-photo/cartoon-character-with-glasses-jacket-that-says-i-m-boy_771335-49732.jpg",
  },
  three: {
    employeId: 1503,
    Name: "Shaikh Musa",
    location: "Hydrabad",
    position: "Front-End Developer",
    contact:"+91 78228 96448",
    experience: "12 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 100000,
    description:
      "Musa is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Musa loves to solve problems and continuously improve his skills.",
    imagee:
      "https://img.freepik.com/premium-photo/cartoon-character-young-boy_1057389-25145.jpg?w=360",
  },
  four: {
    employeId: 1504,
    Name: "Azhar Hussain",
    location: "Nanded",
    position: "Front-End Developer",
    contact:"+91 7972 078960",
    experience: "5 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 60000,
    description:
      "Azhar is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Azhar loves to solve problems and continuously improve his skills.",
    imagee:
      "./images/AHNGHB.png",
  },
  five: {
    employeId: 1505,
    Name: "Abdul Rahman Khan",
    location: "Pune",
    position: "Front-End Developer",
    contact:"+91 93738 41055",
    experience: "6 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 70000,
    description:
      "Rahman is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Rahman loves to solve problems and continuously improve his skills.",
    imagee:
      "./images/Screenshot 2024-07-30 224255.png",
  },
  six: {
    employeId: 1506,
    Name: "Shaikh Abdul Rahman",
    location: "Bangaloru",
    position: "Front-End Developer",
    contact:"+91 70835 27090",
    experience: "8 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 70000,
    description:
      "Rahman is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Rahman loves to solve problems and continuously improve his skills.",
    imagee:
      "https://img.freepik.com/premium-photo/cartoon-character-young-boy_1057389-25133.jpg",
  },
  seven: {
    employeId: 1507,
    Name: "Mohammed Saqeb",
    location: "Delhi",
    position: "Front-End Developer",
    contact:"+91 87671 45614",
    experience: "8 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 80000,
    description:
      "Saqeb is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Saqeb loves to solve problems and continuously improve his skills.",
    imagee:
      "https://img.freepik.com/premium-photo/cartoon-character-young-boy_1057389-25123.jpg",
  },
  eight: {
    employeId: 1508,
    Name: "Mohammed Noman",
    location: "Aurangabad",
    position: "Front-End Developer",
    contact:"+91 84216 81464",
    experience: "5 Years",
    company: "Tekisky Pvt. Ltd.",
    salary: 60000,
    description:
      "Noman is a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites. He is proficient in HTML, CSS, JavaScript, and various modern web frameworks. Noman loves to solve problems and continuously improve his skills.",
    imagee:
      "./images/noman2024-07-30 225816.png",
  },
};


function job(a) {
  switch (a) {
    case 1501:
      document.getElementById("heading").innerHTML = boys.one.Name;
      document.getElementById("ptag").innerHTML = boys.one.position;
      document.getElementById("ptag2").innerHTML = `Position : ${boys.one.position}`;
      document.getElementById("ptag3").innerHTML = `Company Name : ${boys.one.company}`;
      document.getElementById("ptag4").innerHTML = `Experience :  ${boys.one.experience} As a Devloper`;
      document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.one.salary}$`;
      document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.one.contact}`;
      document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.one.location}`;
      document.getElementById("ptag8").innerHTML = `Description :  ${boys.one.description}`;
      document.getElementById("imag").src = boys.one.imagee;
      break;
      case 1502:
        document.getElementById("heading").innerHTML = boys.two.Name;
        document.getElementById("ptag").innerHTML = boys.two.position;
        document.getElementById("ptag2").innerHTML = `Position : ${boys.two.position}`;
        document.getElementById("ptag3").innerHTML = `Company Name : ${boys.two.company}`;
        document.getElementById("ptag4").innerHTML = `Experience :  ${boys.two.experience} As a Devloper`;
        document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.two.salary}$`;
        document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.two.contact}`;
        document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.two.location}`;
        document.getElementById("ptag8").innerHTML = `Description :  ${boys.two.description}`;
        document.getElementById("imag").src = boys.two.imagee;
        break;
        case 1503:
        document.getElementById("heading").innerHTML = boys.three.Name;
        document.getElementById("ptag").innerHTML = boys.three.position;
        document.getElementById("ptag2").innerHTML = `Position : ${boys.three.position}`;
        document.getElementById("ptag3").innerHTML = `Company Name : ${boys.three.company}`;
        document.getElementById("ptag4").innerHTML = `Experience :  ${boys.three.experience} As a Devloper`;
        document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.three.salary}$`;
        document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.three.contact}`;
        document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.three.location}`;
        document.getElementById("ptag8").innerHTML = `Description :  ${boys.three.description}`;
        document.getElementById("imag").src = boys.three.imagee;
        break;
        case 1504:
            document.getElementById("heading").innerHTML = boys.four.Name;
            document.getElementById("ptag").innerHTML = boys.four.position;
            document.getElementById("ptag2").innerHTML = `Position : ${boys.four.position}`;
            document.getElementById("ptag3").innerHTML = `Company Name : ${boys.four.company}`;
            document.getElementById("ptag4").innerHTML = `Experience :  ${boys.four.experience} As a Devloper`;
            document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.four.salary}$`;
            document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.four.contact}`;
            document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.four.location}`;
            document.getElementById("ptag8").innerHTML = `Description :  ${boys.four.description}`;
            document.getElementById("imag").src = boys.four.imagee;
            break;
            case 1505:
            document.getElementById("heading").innerHTML = boys.five.Name;
            document.getElementById("ptag").innerHTML = boys.five.position;
            document.getElementById("ptag2").innerHTML = `Position : ${boys.five.position}`;
            document.getElementById("ptag3").innerHTML = `Company Name : ${boys.five.company}`;
            document.getElementById("ptag4").innerHTML = `Experience :  ${boys.five.experience} As a Devloper`;
            document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.five.salary}$`;
            document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.five.contact}`;
            document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.five.location}`;
            document.getElementById("ptag8").innerHTML = `Description :  ${boys.five.description}`;
            document.getElementById("imag").src = boys.five.imagee;
            break;
            case 1506:
                document.getElementById("heading").innerHTML = boys.six.Name;
                document.getElementById("ptag").innerHTML = boys.six.position;
                document.getElementById("ptag2").innerHTML = `Position : ${boys.six.position}`;
                document.getElementById("ptag3").innerHTML = `Company Name : ${boys.six.company}`;
                document.getElementById("ptag4").innerHTML = `Experience :  ${boys.six.experience} As a Devloper`;
                document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.six.salary}$`;
                document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.six.contact}`;
                document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.six.location}`;
                document.getElementById("ptag8").innerHTML = `Description :  ${boys.six.description}`;
                document.getElementById("imag").src = boys.six.imagee;
                break;
                case 1507:
                    document.getElementById("heading").innerHTML = boys.seven.Name;
                    document.getElementById("ptag").innerHTML = boys.seven.position;
                    document.getElementById("ptag2").innerHTML = `Position : ${boys.seven.position}`;
                    document.getElementById("ptag3").innerHTML = `Company Name : ${boys.seven.company}`;
                    document.getElementById("ptag4").innerHTML = `Experience :  ${boys.seven.experience} As a Devloper`;
                    document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.seven.salary}$`;
                    document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.seven.contact}`;
                    document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.seven.location}`;
                    document.getElementById("ptag8").innerHTML = `Description :  ${boys.seven.description}`;
                    document.getElementById("imag").src = boys.seven.imagee;
                    break;
                    case 1508:
                        document.getElementById("heading").innerHTML = boys.eight.Name;
                        document.getElementById("ptag").innerHTML = boys.eight.position;
                        document.getElementById("ptag2").innerHTML = `Position : ${boys.eight.position}`;
                        document.getElementById("ptag3").innerHTML = `Company Name : ${boys.eight.company}`;
                        document.getElementById("ptag4").innerHTML = `Experience :  ${boys.eight.experience} As a Devloper`;
                        document.getElementById("ptag5").innerHTML = `Job Salery :  ${boys.eight.salary}$`;
                        document.getElementById("ptag6").innerHTML = `Contact No :  ${boys.eight.contact}`;
                        document.getElementById("ptag7").innerHTML = `Location : Lives In ${boys.eight.location}`;
                        document.getElementById("ptag8").innerHTML = `Description :  ${boys.eight.description}`;
                        document.getElementById("imag").src = boys.eight.imagee;
                        break;      
    default:
        document.getElementById("ptag3").innerHTML = `Please Enter a Valid Employe id`;
      
      break;
  }
}
job(a);
