// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getDoc, updateDoc, doc } from "firebase/firestore";
// import { db } from "../firebaseConfig/firebase";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import "./Edit.css";

// const MySwal = withReactContent(Swal);

// const Edit = () => {
//   const [art, setart] = useState("");
//   const [stock, setStock] = useState("");
//   const [accessed_treatment, setAccessed_treatment] = useState("");
//   const [additional_cellnumber, setaddtional_cellnumber] = useState("");
//   const [dataReport, setdataReport] = useState("");
//   const [antenatalCare, setAntenatalCare] = useState("");
//   const [homeTb, sethomeTb] = useState("");
//   const [diagnosedCovid, setdiagnosedCovid] = useState("");
//   const [toldTb, settoldTb] = useState("");
//   const [bingeDrinking, setbingeDrinking] = useState("");
//   const [Diasblood, setDiasblood] = useState("");
//   const [Systblood, setSystblood] = useState("");
//   const [BloodSugar, setBloodSugar] = useState("");
//   const [burning, setBurning] = useState("");
//   const [callCenter, setCallCenter] = useState("");
//   const [cellNumber, setCellNumber] = useState("");
//   const [cholesterol, setcholesterol] = useState("");
//   const [comments, setcomments] = useState("");
//   const [CompanyName, setCompanyName] = useState("");
//   const [confirmTestExpDate, setconfirmTestExpDate] = useState("");
//   const [confirmTestName, setconfirmTestName] = useState("");
//   const [confirmTestNumber, setconfirmTestNumber] = useState("");
//   const [coughlast, setCoughlast] = useState("");
//   const [counselling, setCounselling] = useState("");
//   const [tb_Treatment, setTbTreatment] = useState("");
//   const [date, setDate] = useState("");
//   const [dob, setDob] = useState("");
//   const [discharge, setdischarge] = useState("");
//   const [smoke, setSmoke] = useState("");
//   const [exercise, setExercise] = useState("");
//   const [quit, setQuit] = useState("");
//   const [elisa, setELISA] = useState("");
//   const [eng, setEng] = useState("");
//   const [ethnicity, setEthnicity] = useState("");
//   const [evalComments, setEvalComments] = useState("");
//   const [takentb, setTakenTb] = useState("");
//   const [familyPlanning, setFamilyPlan] = useState("");
//   const [fCondom, setFCondom] = useState("");
//   const [fever, setfever] = useState("");
//   const [hivTest, setHivTest] = useState("");
//   const [firstTestResult, setFirstTestResult] = useState("");
//   const [followUpVisit, setfollowUpVisit] = useState("");
//   const [fullVac, setFullVac] = useState("");
//   const [gender, setGender] = useState("");
//   const [genderViolence, setGenderVio] = useState("");
//   const [hiv, setHiv] = useState("");
//   const [heartRate, setHeartRate] = useState("");
//   const [height, setHeight] = useState("");
//   const [highStress, setHighStress] = useState("");
//   const [covidTimes, setTimesCovid] = useState("");
//   const [idType, setIdType] = useState("");
//   const [increaseExercise, setIncreaseExercise] = useState("");

//   const navigate = useNavigate();
//   const { id } = useParams();

//   const update = async (e) => {
//     e.preventDefault();
//     const product = doc(db, "patients", id);
//     const data = {
//       art: art,
//       stock: stock,
//       accessed_treatment: accessed_treatment,
//       additional_cellnumber: additional_cellnumber,
//       dataReport: dataReport,
//       antenatalCare: antenatalCare,
//       homeTb: homeTb,
//       diagnosedCovid: diagnosedCovid,
//       toldTb: toldTb,
//     };
//     await updateDoc(product, data);
//     navigate("/Show");
//   }
//   //   if ((e = true)) {
//   //     Swal.fire({
//   //       confirmButtonColor: "#C1151B ",
//   //       title: "Patient Record Updated",
//   //       text: "",
//   //       icon: "success",
//   //     });
    
//   //   } else {
//   //     Swal.fire({
//   //       buttonsStyling: true,
//   //       icon: "error",
//   //       title: "Oops...",
//   //       text: "Something went wrong!",
//   //     });
//   //   }
//   // };

//   const [search, setSearch] = useState("");

//   const getProductById = async (id) => {
//     const product = await getDoc(doc(db, "patients", id));
//     if (product.exists()) {
//       //console.log(product.data())
//       setart(product.data().ART);
//       setStock(product.data().stock);
//       setAccessed_treatment(product.data().Accessed_Treatment);
//       setaddtional_cellnumber(product.data().Additional_Cell_Number);
//       setdataReport(product.data().Allow_Anonymous_Data_reporting);
//       setAntenatalCare(product.data().Antenatal_Care);
//       sethomeTb(product.data().Anyone_at_Home_has_TB);
//       setdiagnosedCovid(product.data().Been_Diagnosed_with_Covid);
//       settoldTb(product.data().Been_Told_have_TB);
//       setbingeDrinking(product.data().Binge_Drinking);
//       setDiasblood(product.data().Blood_Pressure_Diastolic_Lower);
//       setSystblood(product.data().Blood_Pressure_Systolic_Upper);
//       setBloodSugar(product.data().Blood_Sugar);
//       setBurning(product.data().Burning_or_Pain_while_passing_urine);
//       setCallCenter(product.data().Call_Center_Follow_Up);
//       setCellNumber(product.data().Cell_Number);
//       setcholesterol(product.data().Cholesterol);
//       setcomments(product.data().Comments);
//       setCompanyName(product.data().Company_Name);
//       setconfirmTestExpDate(
//         product.data().Confirmation_Test_Kit_Expiration_Date
//       );
//       setconfirmTestName(product.data().Confirmation_Test_Kit_Name);
//       setconfirmTestNumber(product.data().Confirmation_Test_Kit_Number);
//       setCoughlast(product.data().Cough_longer_than_2_weeks);
//       setCounselling(product.data().Counselling_for_Emotional_Wellness);
//       setTbTreatment(product.data().Current_TB_Treatment);
//       setDate(product.data().Date);
//       setDob(product.data().Date_of_Birth);
//       setdischarge(product.data().Discharge_Smells);
//       setSmoke(product.data().Do_you_Smoke);
//       setExercise(product.data().Do_you_exercise);
//       setQuit(product.data().Do_you_want_to_quit);
//       setELISA(product.data().ELISA);
//       setEng(product.data().English_Proficiency);
//       setEthnicity(product.data().Ethnicity);
//       setEvalComments(product.data().Evaluator_Comments);
//       setTakenTb(product.data().Ever_taken_TB_Meds);
//       setFamilyPlan(product.data().Family_Planning);
//       setFCondom(product.data().Female_Condoms);
//       setfever(product.data().Fever_Chills_or_Night_Sweats);
//       setHivTest(product.data().First_HIV_Test);
//       setFirstTestResult(product.data().First_Test_Result);
//       setfollowUpVisit(product.data().Follow_Up_Home_Visit);
//       setFullVac(product.data().Fully_Vaccinated);
//       setGender(product.data().Gender);
//       setGenderVio(product.data().genderViolence);
//       setHiv(product.data().HIV);
//       setHeartRate(product.data().Heart_Rate);
//       setHeight(product.data().Height);
//       setHighStress(product.data().Highly_Stressed);
//       setTimesCovid(product.data().How_many_times_had_Covid);
//       setIdType(product.data().Id_Type);
//       setIncreaseExercise(product.data().Increase_exercise_level);
//     } else {
//       console.log("Patient doesnt exist");
//     }
//   };
//   function Title(props) {
//     return <label className="form-label">{props.name}</label>;
//   }

//   useEffect(() => {
//     getProductById(id);
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="container">
//       <div className="">
//         <div className="">
//           <h1>Edit Product</h1>
//           <input
//             placeholder="Search"
//             onChange={(e) => setSearch(e.target.value)}
//           ></input>
//           <form className="form-container" onSubmit={update}>
            
//             <tr>
//               {" "}
//               <td className="data-container">
//                 <div className="edit-container edit-container-top">
//                   <Title name="ART" />
//                   <input
//                     value={art}
//                     onChange={(e) => setart(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Accessed Treatment" />
//                   <input
//                     value={accessed_treatment}
//                     onChange={(e) => setAccessed_treatment(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Additional Cell Number" />
//                   <input
//                     value={additional_cellnumber}
//                     onChange={(e) => setaddtional_cellnumber(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Allow Anonymous Data Report" />
//                   <input
//                     value={dataReport}
//                     onChange={(e) => setdataReport(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Antenatal Care" />
//                   <input
//                     value={antenatalCare}
//                     onChange={(e) => setAntenatalCare(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Anyone at Home has TB" />
//                   <input
//                     value={homeTb}
//                     onChange={(e) => sethomeTb(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Been Diagnosed with Covid " />
//                   <input
//                     value={diagnosedCovid}
//                     onChange={(e) => setdiagnosedCovid(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Been Told have TB " />
//                   <input
//                     value={toldTb}
//                     onChange={(e) => settoldTb(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Binge Drinking" />
//                   <input
//                     value={bingeDrinking}
//                     onChange={(e) => setbingeDrinking(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Blood Pressure Diastolic Lower " />
//                   <input
//                     value={Diasblood}
//                     onChange={(e) => setDiasblood(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Blood Pressure Systolic Upper" />
//                   <input
//                     value={Systblood}
//                     onChange={(e) => setSystblood(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Blood Sugar" />
//                   <input
//                     value={BloodSugar}
//                     onChange={(e) => setBloodSugar(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Burning pain while passing urine " />
//                   <input
//                     value={burning}
//                     onChange={(e) => setBurning(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Call Center Follow Up" />
//                   <input
//                     value={callCenter}
//                     onChange={(e) => setCallCenter(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Cell Number" />
//                   <input
//                     value={cellNumber}
//                     onChange={(e) => setCellNumber(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Cholesterol" />
//                   <input
//                     value={cholesterol}
//                     onChange={(e) => setcholesterol(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Comments" />
//                   <input
//                     value={comments}
//                     onChange={(e) => setcomments(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Company Name" />
//                   <input
//                     value={CompanyName}
//                     onChange={(e) => setCompanyName(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Confirmation Test Kit Exp Date" />
//                   <input
//                     value={confirmTestExpDate}
//                     onChange={(e) => setconfirmTestExpDate(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Confirmation Test Kit Name" />
//                   <input
//                     value={confirmTestName}
//                     onChange={(e) => setconfirmTestName(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Confirmation Test Kit Number" />
//                   <input
//                     value={confirmTestNumber}
//                     onChange={(e) => setconfirmTestNumber(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Cough longer than 2 weeks " />
//                   <input
//                     value={coughlast}
//                     onChange={(e) => setCoughlast(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Counselling for Emotional Wellness " />
//                   <input
//                     value={counselling}
//                     onChange={(e) => setCounselling(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Current TB Treatment " />
//                   <input
//                     value={tb_Treatment}
//                     onChange={(e) => setTbTreatment(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Date " />
//                   <input
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Date of Birth " />
//                   <input
//                     value={dob}
//                     onChange={(e) => setDob(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Discharge Smells " />
//                   <input
//                     value={discharge}
//                     onChange={(e) => setdischarge(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Do you Smoke" />
//                   <input
//                     value={smoke}
//                     onChange={(e) => setSmoke(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Do you Exercise" />
//                   <input
//                     value={exercise}
//                     onChange={(e) => setExercise(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Do you want to quit " />
//                   <input
//                     value={quit}
//                     onChange={(e) => setQuit(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="ELISA " />
//                   <input
//                     value={elisa}
//                     onChange={(e) => setELISA(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="English Proficiency " />
//                   <input
//                     value={eng}
//                     onChange={(e) => setEng(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Ethnicity " />
//                   <input
//                     value={ethnicity}
//                     onChange={(e) => setEthnicity(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Evaluator Comments" />
//                   <input
//                     value={evalComments}
//                     onChange={(e) => setEvalComments(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Ever taken TB Meds" />
//                   <input
//                     value={takentb}
//                     onChange={(e) => setTakenTb(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Family Planning" />
//                   <input
//                     value={familyPlanning}
//                     onChange={(e) => setFamilyPlan(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Female Condoms" />
//                   <input
//                     value={fCondom}
//                     onChange={(e) => setFCondom(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Fever Chills or Night Sweats " />
//                   <input
//                     value={fever}
//                     onChange={(e) => setfever(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="First HIV Test" />
//                   <input
//                     value={hivTest}
//                     onChange={(e) => setHivTest(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="First Test Result" />
//                   <input
//                     value={firstTestResult}
//                     onChange={(e) => setFirstTestResult(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Follow Up Home Visit " />
//                   <input
//                     value={followUpVisit}
//                     onChange={(e) => setfollowUpVisit(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Fully Vaccinated " />
//                   <input
//                     value={fullVac}
//                     onChange={(e) => setFullVac(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Gender" />
//                   <input
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="HIV" />
//                   <input
//                     value={genderViolence}
//                     onChange={(e) => setGenderVio(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Gender based violence" />
//                   <input
//                     value={hiv}
//                     onChange={(e) => setHiv(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Heart Rate" />
//                   <input
//                     value={heartRate}
//                     onChange={(e) => setHeartRate(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Height" />
//                   <input
//                     value={height}
//                     onChange={(e) => setHeight(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Highly Stressed" />
//                   <input
//                     value={highStress}
//                     onChange={(e) => setHighStress(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Covid Times" />
//                   <input
//                     value={covidTimes}
//                     onChange={(e) => setTimesCovid(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="ID Type" />
//                   <input
//                     value={idType}
//                     onChange={(e) => setIdType(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Increase Exercise Level" />
//                   <input
//                     value={increaseExercise}
//                     onChange={(e) => setIncreaseExercise(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Industry Member" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Industry Number" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Informed of HIV test Result" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Itching_Genitals_or_Anus_Blisters_Sores_Spots_Lumps" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Key Population Type" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Last Test Result" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Last Tested" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Lost Weight no dieting" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Lubricants" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Male Condoms" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Manage Finance Better" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Managing Stress" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Most impact Illness" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Mucus Tested" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="NCDs Treatment and Support" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Name" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Nationality" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Number of cigarettes a day" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Nurse ID" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Other Illness" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Other Reason for Testing" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Other Referrals" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="PMTCT" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Post Test Counselling" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Pre ART" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Preferred Contact Time" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Preferred Facility" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Preferred Language" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Rapid Test" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Reason for Testing" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name=" Reason not fully Vaccinated" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Referral Facility" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="STI Test" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Scale of Emotional Wellness" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Sleeping problems" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Social Service" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="STI treatment" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Surname" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="TB Test" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Test Kit Expiration Date" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Test Kit Name" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Test Type" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Too much alcohol" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Unprotected Sex" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Voluntary Male Medical Circumcision" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Waist Circumference" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Weight" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//                 <div className="edit-container">
//                   <Title name="Will undergo Wellness Measurement" />
//                   <input
//                     value={stock}
//                     onChange={(e) => setStock(e.target.value)}
//                     type="text"
//                     className="board"
//                   />
//                 </div>
//               </td>
//             </tr>
//             <button type="submit" className="btn btn-primary">
//               Update
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Edit;
