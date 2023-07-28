const reas_btn = document.getElementById("reas");
reas_btn.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
  <div class="overlay">
      <div class="content">
      <i class="fa-solid fa-xmark" id="cancel-bnt"></i>
          <div class="one-page">
              <p class="research-nme">Research Summary</p>
              <hr class="line0">
              <div class="block">
                  <p class="paras1">
                      Deriving knowledge from huge is a great challenge today. Many new mathematical
                      modeling
                      tools such as fuzzy set, rough set and soft set are emerging to the thrust of the
                      real
                      world task. Development of these techniques and tools and its popularity are studied
                      under different domains like knowledge discovery in database, computational
                      intelligence, knowledge engineering, granular computing etc. The basic idea of rough
                      set
                      is based upon the approximation of sets by lower and the upper approximation. Here,
                      these approximations are based on equivalence relation. However, the requirement of
                      equivalence relation is a restrictive condition that may limit the application of
                      the
                      rough set model. Therefore, the basic notion of rough set is generalized in many
                      ways.
                      For instance, the equivalence relation is generalized to binary relations,
                      neighborhood
                      systems, coverings, Boolean algebras. Further, the indiscernibility relation is
                      generalized to almost indiscernibility relation with the introduction of fuzzy
                      proximity
                      relation. It further extended to intuitionistic fuzzy proximity relation and the
                      concept
                      of rough set on fuzzy approximation spaces and rough set on intuitionistic fuzzy
                      approximation space is studied. In addition, rough set is hybridized with formal
                      concept
                      analysis to study various real life applications.
                  </p>
                  <p class="paras1">
                      Further rough set is generalized to rough set on two universal sets with generalized
                      approximation spaces. Further study in the same direction is carried out. We have
                      defined topological characterization of rough set on two universal sets. Also, we
                      establish necessary and sufficient type theorems and show how the results of Busse
                      can
                      be derived from them. Measures of uncertainty and rough equality of sets on two
                      universal sets are also studied. Further rough set on two universal sets is
                      generalized
                      to intuitionistic fuzzy rough set on two universal sets and its properties that are
                      important in the context of knowledge representation is studied. Also, rough
                      computing
                      is hybridized with Bayesian classification to study missing associations of
                      attribute
                      values. In addition to this, application of rough computing in trust management of
                      MANET
                      is also carried out. Further, multi-granular rough set on two universal sets is
                      defined
                      and its various properties are studied.
                  </p>
              </div>
          </div>
          <div class="two-page">
              <p class="nme-mam">Doctoral Students</p>
              <hr class="line20">
              <div class="con0">
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
                  <div class="lab1">
                      <img src="images/Nancy.jpg" alt="" class="fac">
                      <div class="about-fac">
                          <p class="para-fac">A Decision Support System for Diagnosis of Diseases using Rough Set
                              and
                              Bio-Inspired Computing</p>
                          <h1 class="nmee">Nancy Kumari</h1>
                          <p class="ab">School of Computer Science and Engineering, VIT University, Vellore,
                              India;
                              December 2019-Continued</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
    `;

  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  document.body.appendChild(popup_box);
  console.log(popup_box);

  const cancel = document.getElementById("cancel-bnt");
  cancel.addEventListener("click", () => {
    popup_box.remove();
    console.log(popup_box);
  });
});

const firebaseConfig = {
    apiKey: "AIzaSyAtNRFhmgMcoVZxoTQxwk3m4MDO7bWK_Yc",
    authDomain: "web-programing-project.firebaseapp.com",
    projectId: "web-programing-project",
    storageBucket: "web-programing-project.appspot.com",
    messagingSenderId: "836737192007",
    appId: "1:836737192007:web:c5b354a45afb034ff22162",
    measurementId: "G-FQ10LP655P"
};

// Initialize Firebase      
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
let ISBN = null;

const DS = db.collection("Doctoral-Students");
let temp = [];

const fetchData = async ()=>{
    let querySnapShot = await DS.get();
    querySnapShot.forEach((doc)=>{
        temp.push(doc.data());
    })
    console.log(temp);
}

fetchData();
function viewPopUp(val){
    ISBN = val;
    console.log('hii')
    let doc = document.getElementById('pu')
    doc.style.visibility = 'visible';
}
document.getElementById('name').addEventListener('focus', function() {
    let doc = document.getElementById('pu')
    doc.style.visibility = 'visible';
});
function submitOrder(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let num = document.getElementById('num').value;
    if(name =='' || email == '' || num == ''){
        alert("Fill all columns before placing order!!")
    }
    else{
        const newOrder = {
            name: name,
            email: email,
            num:num,
            ISBN:ISBN
            // Add any other properties as needed
          };
      
          // Add the user data to the "users" collection
          db.collection("bookings")
            .add(newOrder)
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              alert("Your order has been placed successfully!!")
              vis = 'hidden'
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
    }
}

const reas1_btn = document.getElementById("reas1");
reas1_btn.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
        <div class="overlay">
            <div class="content">
                <i class="fa-solid fa-xmark" id="cancel-bnt"></i>
                <div class="two-page">
                    <p class="nme-mam" id="bok">BOOKS</p>
                    <hr class="line20">
                    <div class="con0">
                        <div class="lab1">
                            <img src="images/DLDA.png" alt="" class="fac">
                            <div class="about-fac">
                                <p class="para-fac">Deep Learning in Data Analytics - Recent Techniques, Practices and
                                    Applications</p>
                                <p class="ab">ISBN: 978-3-030-75854-7; Springer International Publishing AG,
                                    Switzerland, USA; 2022; Editors: D. P. Acharjya, Anirban Mitra and Noor Zaman.</p>
                            </div>
                            <button onclick="viewPopUp('978-3-030-75854-7')" class="btn">Order now<button>
                        </div>
                        <div class="lab1">
                            <img src="images/SAIS.png" alt="" class="fac">
                            <div class="about-fac">
                                <p class="para-fac">Smart and Intelligent Systems</p>
                                <p class="ab">ISBN: 978-981-16-2108-6; Springer International Publishing AG, Switzerland, USA; 2022; Editors: Subhojit Dawn, Kedar Nath Das, Rammohan Mallipeddi and D. P. Acharjya.</p>
                            </div>
                            <button onclick="viewPopUp('978-981-16-2108-6')" class="btn">Order now<button>
                        </div>
                    </div>
                </div>
            </div>
    `;


  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  document.body.appendChild(popup_box);
  console.log(popup_box);

  const cancel = document.getElementById("cancel-bnt");
  cancel.addEventListener("click", () => {
    popup_box.remove();
    console.log(popup_box);
  });
});

const reas2_btn = document.getElementById("reas2");
reas2_btn.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
  <div class="overlay">
  <div class="content">
      <i class="fa-solid fa-xmark" id="cancel-bnt"></i>
      <div class="one-page">
          <p class="research-nme">Teaching</p>
          <hr class="line0">
          <p class="pras">Teaching is an art that undertake certain ethical tasks or activities with the
              intention of learning. Though the exact definition of teaching is not defined, but the mission
              of teaching and practice can be defined in numerous ways. Being a teacher my primary mission is
              to make my place of work a center of excellence in R&D as per with international standard and to
              become the role model in front of others. According to my practice, considering research work as
              an integral component of teaching and giving equal importance to both teaching and research in
              day today life is the primary teaching practice.</p>
      </div>
      <div class="two-page">
          <p class="nme-mam">Currrent Teaching</p>
          <hr class="line20">
          <div class="cont18">
              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2012</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Theory of Computation</p>
                      <p class="des-acad" id="dsa">It provides required theoretical foundation for a
                          computational
                          model. Additionally, Turing machines is discussed as a abstract computational model.
                      </p>
                  </div>
              </div>
              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2012</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Data Structure and Algorithms</p>
                      <p class="des-acad" id="dsa">Data structure and algorithm is fundamental course for any
                          scientific computation. How the design of the algorithm can be made so as to get
                          better performance is the prime objective of this subject.</p>
                  </div>
              </div>
              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2020</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Computational Intelligence</p>
                      <p class="des-acad" id="dsa">Gave a systematic introduction to the fundamentals and
                          practices of
                          Computational Intelligence, which encompasses Artificial neural networks, Fuzzy
                          logic systems, Evolutionary computing, Swarm intelligence, Neuro-fuzzy and Fuzzy
                          neural systems, hybrid intelligent systems and applications to design, manufacturing
                          and business.

                      </p>
                  </div>
              </div>
          </div>
      </div>
      <div class="two-page" id="ppp">
          <p class="nme-mam">Teaching History</p>
          <hr class="line20">
          <div class="cont18">
              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2012</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Theory of Computation</p>
                      <p class="des-acad" id="dsa">It provides required theoretical foundation for a
                          computational
                          model. Additionally, Turing machines is discussed as a abstract computational model.
                      </p>
                  </div>
              </div>
              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2012</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Data Structure and Algorithms</p>
                      <p class="des-acad" id="dsa">Data structure and algorithm is fundamental course for any
                          scientific computation. How the design of the algorithm can be made so as to get
                          better performance is the prime objective of this subject.</p>
                  </div>
              </div>
              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2020</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Computational Intelligence</p>
                      <p class="des-acad" id="dsa">Gave a systematic introduction to the fundamentals and
                          practices of
                          Computational Intelligence, which encompasses Artificial neural networks, Fuzzy
                          logic systems, Evolutionary computing, Swarm intelligence, Neuro-fuzzy and Fuzzy
                          neural systems, hybrid intelligent systems and applications to design, manufacturing
                          and business.

                      </p>
                  </div>
              </div>

              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2020</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Computational Intelligence</p>
                      <p class="des-acad" id="dsa">Gave a systematic introduction to the fundamentals and
                          practices of
                          Computational Intelligence, which encompasses Artificial neural networks, Fuzzy
                          logic systems, Evolutionary computing, Swarm intelligence, Neuro-fuzzy and Fuzzy
                          neural systems, hybrid intelligent systems and applications to design, manufacturing
                          and business.

                      </p>
                  </div>
              </div>

              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2020</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Computational Intelligence</p>
                      <p class="des-acad" id="dsa">Gave a systematic introduction to the fundamentals and
                          practices of
                          Computational Intelligence, which encompasses Artificial neural networks, Fuzzy
                          logic systems, Evolutionary computing, Swarm intelligence, Neuro-fuzzy and Fuzzy
                          neural systems, hybrid intelligent systems and applications to design, manufacturing
                          and business.

                      </p>
                  </div>
              </div>

              <div class="boxx1" id="boox1">
                  <div class="year" id="yeer1">
                      <p class="years1" id="yeerr1">Present</p>
                      <p class="years2" id="yeerr2">2020</p>
                  </div>
                  <div class="about-acad">
                      <p class="name-acad" id="fsa">Computational Intelligence</p>
                      <p class="des-acad" id="dsa">Gave a systematic introduction to the fundamentals and
                          practices of
                          Computational Intelligence, which encompasses Artificial neural networks, Fuzzy
                          logic systems, Evolutionary computing, Swarm intelligence, Neuro-fuzzy and Fuzzy
                          neural systems, hybrid intelligent systems and applications to design, manufacturing
                          and business.

                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
    `;

  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  document.body.appendChild(popup_box);
  console.log(popup_box);

  const cancel = document.getElementById("cancel-bnt");
  cancel.addEventListener("click", () => {
    popup_box.remove();
    console.log(popup_box);
  });
});

const reas3_btn = document.getElementById("reas3");
reas3_btn.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
  <div class="overlay">
            <div class="content">
                <i class="fa-solid fa-xmark" id="cancel-bnt"></i>
                <div class="one-page" id="one1">
                    <h1 class="gallerys">Gallery</h1>
                    <p class="gall">A photograph speaks much than a literature. Photograph and digital images plays a
                        vital role when we think about our past memories and achievements. The ceremonies of
                        professional awards, important events such as service awards, togetherness, work place, invited
                        talks, PhD awards of doctoral students, and news paper cuttings are all recorded because they
                        matter. Photographs speak our personal story, our lives, faces, and places that we love. We can
                        share these stories with others and in deed provide us happiness. This impulse is presented here
                        and is a powerful force for me to represent myself.</p>
                </div>
                <div class="one-page" id="one2">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                    <img src="images/02.jpg" alt="" id="grid-img">
                    <img src="images/03.jpg" alt="" id="grid-img">
                    <img src="images/06.jpg" alt="" id="grid-img">
                </div>
            </div>
        </div>
    `;

  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  document.body.appendChild(popup_box);
  console.log(popup_box);

  const cancel = document.getElementById("cancel-bnt");
  cancel.addEventListener("click", () => {
    popup_box.remove();
    console.log(popup_box);
  });
});

const reas4_btn = document.getElementById("reas4");
reas4_btn.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
  <div class="overlay">
            <div class="content">
                <i class="fa-solid fa-xmark" id="cancel-bnt"></i>
                <div class="one-page">
                    <p class="research-nme">Contact & Meet Me</p>
                    <hr class="line0">
                    <div class="od">
                        <p class="prs">
                            Contact address is of prime importance to contact a person. It provides the means by which
                            one can reach at me. Some addresses include web address, voice call, voice chat, video chat,
                            official address, to make identification easier. Contact details online helps people to
                            contact easily. I would be happy to talk to you if you need my assistance in your research
                            or whether you need bussiness administration support for your company. I devote my limited
                            time for the development of my students.
                        </p>
                        <div class="contct">
                            <p class="cc">office: 0416-220 2898</p>
                            <p class="cc">home: 0416-220 5263</p>
                            <p class="cc">debiprasannaacharjya @vit.ac.in</p>
                            <p class="cc">dpacharjya@gmail.com</p>
                        </div>
                    </div>
                </div>
                <img src="images/Return-to-office-900x387.jpg" alt="" class="pos">
                <div class="one-page" id="onnn">
                    <p class="research-nme">At My Office</p>
                    <hr class="line0">
                    <div class="van">
                        <p class="pr">
                            You can find me at my Work located at Silver Jubilee Tower Annexe, 201 E, VIT
                            University,
                            Vellore, Tamilnadu, India.
                            I am at my office every day from 9:00 AM until 6:30 PM except holidays, but you may
                            consider
                            a call to fix an appointment.
                        </p>
                        <img src="images/depositphotos_352482734-stock-illustration-coffee-cup-icon-white-background.jpg"
                            alt="" class="tea">
                    </div>
                </div>
                <img src="images/trendreport1.jpg" alt="" class="pos">
                <div class="one-page" id="onnn">
                    <p class="research-nme">
                        At My Work </p>
                    <hr class="line0">
                    <div class="van">
                        <img src="images/depositphotos_5241178-stock-photo-stetoscope.jpg" alt="" class="tea1">
                        <p class="pr1">
                            You can find me at my Work located at Silver Jubilee Tower Annexe, 201 E, VIT
                            University,
                            Vellore, Tamilnadu, India.
                            I am at my office every day from 9:00 AM until 6:30 PM except holidays, but you may
                            consider
                            a call to fix an appointment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  document.body.appendChild(popup_box);
  console.log(popup_box);

  const cancel = document.getElementById("cancel-bnt");
  cancel.addEventListener("click", () => {
    popup_box.remove();
    console.log(popup_box);
  });
});

const reas5_btn = document.getElementById("reas5");
reas5_btn.addEventListener("click", () => {
  let popup_box = document.createElement("div");
  popup_box.classList.add("popup");
  let HTMLdata = `
  <div class="overlay">
            <div class="content">
                <i class="fa-solid fa-xmark" id="cancel-bnt"></i>
                <div class="one-page">
                    <p class="research-nme">Selected Publications</p>
                    <hr class="line0">
                    <p class="paras1">
                        A systematic detail study and investigation of a topic and to discover new facts or to do the
                        existing facts differently is known as research. The basic research deals with increasing
                        scientific knowledge whereas applied research use basic research to solve a real world problem.
                        The selected publications that are resulted from my research and my doctoral team members are
                        listed here.
                    </p>
                </div>
                <div class="pge">
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                    <div class="cord">
                        <p class="crd">A Fuzzy Graph Neural Network Approach for the Prediction of Radial Overcut in
                            Electro Discharge Machining</p>
                        <p class="pet">Amrut Ranjan Jena, Raja Das and D. P. Acharjya</p>
                        <div class="bexi">
                            <p class="jour">Journal Papers</p>
                            <p class="int">International Journal of Swarm Intelligence Research, IGI Global, Volume ,
                                Issue , Pages (To Appear)</p>
                        </div>
                        <div class="fix">
                            <i class="fa-solid fa-download" id="link-btn"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square" id="link-btn"></i>
                            <i class="fa-regular fa-square-plus" id="link-btn"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  popup_box.insertAdjacentHTML("afterbegin", HTMLdata);
  document.body.appendChild(popup_box);
  console.log(popup_box);

  const cancel = document.getElementById("cancel-bnt");
  cancel.addEventListener("click", () => {
    popup_box.remove();
    console.log(popup_box);
  });
});

const bar = document.getElementById("bar");
const side_bar = document.getElementById("sidebar");
bar.addEventListener("click", () => {
  side_bar.style.display = "block";
});

const cancel_side = document.getElementById("cancel_side");
cancel_side.addEventListener("click", () => {
  side_bar.remove();
});
