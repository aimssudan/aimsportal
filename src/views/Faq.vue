<template>
  <main class="page faq-page">
    <div class="container">
      <div class="row" style="min-height: 80vh;">
        <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <h2 class="text-primary">Frequently Asked Questions (FAQs) </h2>
              </div>
            </div>

            <div class="card mt-3 pb-3">
              <div class="card-body">
                <h5 class="text-primary">What is the South Sudan Aid Information Management System (AIMS)?</h5>
                <p>AIMS is a comprehensive, integrated system that collects, analyzes, and disseminates critical data on humanitarian aid and development activities in South Sudan. The platform was established in 2022 to enhance the coordination, monitoring, and reporting of aid interventions in the country</p>

                <h5 class="text-primary">Who can access AIMS?</h5>
                <p>AIMS is accessible to all humanitarian actors, including NGOs, UN agencies, government entities, other partners involved in aid and development work in South Sudan and the public. Access to specific information is determined by the user's role and permissions.</p>

                <h5 class="text-primary">What kind of information does AIMS collect?</h5>
                <p>AIMS collects a wide range of information related to humanitarian and development interventions, including project details, beneficiary information, financial data, and other relevant indicators. The system is designed to capture both quantitative and qualitative data to support evidence-based decision-making.</p>

                <h5 class="text-primary">How is the information in AIMS collected?</h5>
                <p>The information in AIMS is collected through various data collection tools, including surveys, assessments, and monitoring and evaluation exercises. The data is entered into the system by authorized users and undergoes quality checks to ensure accuracy and completeness.</p>

                <h5 class="text-primary">What are the benefits of using AIMS?</h5>
                <p>AIMS provides a range of benefits, including enhanced coordination, improved monitoring and reporting, increased accountability, and better decision-making. The platform helps humanitarian actors to track the implementation and impact of their interventions, identify gaps and duplication, and measure progress towards achieving common objectives.</p>

                <h5 class="text-primary">Is the information in AIMS publicly available?</h5>
                <p>Yes, aggregated and anonymized data available for public view may be shared with external stakeholders for reporting and analysis purposes. However, administrative data is confidential and only accessible to authorized users.</p>

                <h5 class="text-primary">How can I get administrative access to AIMS?</h5>
                <p>If you are a humanitarian actor working in South Sudan, you can request access to AIMS by contacting the system administrator. Access is subject to approval and based on the user's role and responsibilities.</p>

                <h5 class="text-primary">Is AIMS compatible with other information management systems?</h5>
                <p>Yes, AIMS is designed to be interoperable with other information management systems. The platform supports data sharing and integration with other databases and platforms, allowing for better coordination and collaboration among humanitarian actors.</p>

                <h5 class="text-primary">What security measures are in place to protect the information in AIMS?</h5>
                <p>AIMS is designed with multiple layers of security to ensure the confidentiality, integrity, and availability of information. The platform uses encryption and access controls to protect data from unauthorized access and cyber threats. The system is also regularly monitored and audited to identify and address any security risks.</p>

                <h5 class="text-primary">How is AIMS funded?</h5>
                <p>AIMS is funded by the United Nations Development Programme (UNDP) in South Sudan.</p>

                <h5 class="text-primary">How can I provide feedback or report an issue with AIMS?</h5>
                <p>If you have any feedback or issues related to AIMS, you can contact the system administrator or the helpdesk. The AIMS team welcomes feedback and suggestions from users to improve the functionality and usability of the platform.</p>

                <h5 class="text-primary">How does AIMS contribute to humanitarian response in South Sudan?</h5>
                <p>AIMS plays a crucial role in enhancing the coordination and effectiveness of humanitarian response in South Sudan. The platform provides a centralized database for all stakeholders involved in aid and development work, allowing for better data sharing, analysis, and reporting. AIMS also supports evidence-based decision-making, helping humanitarian actors to target interventions more effectively and efficiently.</p>

                <h5 class="text-primary">Is AIMS compatible with mobile devices?</h5>
                <p>Yes, AIMS is compatible with mobile devices, including smartphones and tablets. The platform has a mobile data collection feature, allowing for real-time data collection and reporting in the field.</p>

                <h5 class="text-primary">How is data protection and privacy ensured in AIMS?</h5>
                <p>AIMS follows strict data protection and privacy regulations, including compliance with the General Data Protection Regulation (GDPR) and other international data protection laws. The platform collects and processes data in accordance with ethical and legal principles, and users are required to follow strict data protection protocols to ensure the confidentiality and integrity of information.</p>

                <h5 class="text-primary">What kind of technical support is available for AIMS users?</h5>
                <p>The AIMS team provides technical support and training to users, including system administration, data management, and data analysis. The team also offers regular updates and maintenance to ensure the platform's functionality and usability.</p>

                <h5 class="text-primary">Is there a cost to use AIMS?</h5>
                <p>There is no cost to use AIMS. The platform is available for use by all humanitarian actors working in South Sudan, and access is provided free of charge.</p>

                <h5 class="text-primary">How is AIMS helping to address the challenges faced by humanitarian actors in South Sudan?</h5>
                <p>AIMS is helping to address several challenges faced by humanitarian actors in South Sudan, including fragmentation, duplication, and data gaps. The platform provides a centralized database for all humanitarian activities in the country, allowing for better coordination and collaboration among actors. AIMS also supports evidence-based decision-making, helping actors to target interventions more effectively and efficiently.</p>

                <h5 class="text-primary">Can AIMS be used to track the impact of humanitarian interventions?</h5>
                <p>Yes, AIMS can be used to track the impact of humanitarian interventions. The platform collects a wide range of data, including beneficiary information, project details, and outcome indicators, allowing for monitoring and evaluation of humanitarian interventions. AIMS also supports real-time data collection and reporting, enabling actors to track progress and adjust interventions as needed.</p>

                <h5 class="text-primary">How does AIMS ensure the quality of data entered into the system?</h5>
                <p>AIMS has a data quality assurance mechanism in place to ensure the accuracy and completeness of data entered into the system. The platform follows strict data entry protocols, including data validation checks and data cleaning procedures. The AIMS team also provides regular data quality checks and feedback to users to improve data quality.</p>

                <h5 class="text-primary">Can AIMS be used for research purposes?</h5>
                <p>Yes, AIMS can be used for research purposes, subject to ethical and legal principles. The platform collects a wide range of data related to humanitarian and development interventions, making it a valuable source of information for research and analysis. However, users must comply with data protection and privacy regulations and obtain appropriate approvals before using AIMS data for research purposes.</p>

              </div>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
created() {
    let isLoggedIn = !!localStorage.getItem("token");
    if(isLoggedIn){
      //put user and translations to vuex state 
      let token = localStorage.getItem("token")
      let loggedInUser = JSON.parse(localStorage.getItem('user'))
      this.$store.commit('auth/SET_TOKEN', token);
      this.$store.commit('auth/SET_USER', loggedInUser);
    }
  },
}
</script>

<style>
  .faq-page {
    padding-top: 5em;
  } 
</style>