<template>
  <main class="page project-page" style="min-height: 80vh;">    
    <div class="container">
      <h1 class="text-primary"> Add Project </h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
          <li class="breadcrumb-item"><a href="#">Projects</a></li>
          <li class="breadcrumb-item active" aria-current="page">Add Project</li>
        </ol>
      </nav>
        <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5>Add New Project</h5>
              </div>
                <div class="card-body">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-basic-tab" data-bs-toggle="tab" data-bs-target="#nav-basic" type="button" role="tab" aria-controls="nav-basic" aria-selected="true">Project Basic Info</button>
                      <button class="nav-link" id="nav-funding-tab" data-bs-toggle="tab" data-bs-target="#nav-funding" type="button" role="tab" aria-controls="nav-funding" aria-selected="false">Funding Info</button>
                      <button class="nav-link" id="nav-sector-tab" data-bs-toggle="tab" data-bs-target="#nav-sector" type="button" role="tab" aria-controls="nav-sector" aria-selected="false">Sector Contribution</button>
                      <button class="nav-link" id="nav-geographic-tab" data-bs-toggle="tab" data-bs-target="#nav-geographic" type="button" role="tab" aria-controls="nav-geographic" aria-selected="false">Geographic Contribution</button>
                      <button class="nav-link" id="nav-effectiveness-tab" data-bs-toggle="tab" data-bs-target="#nav-effectiveness" type="button" role="tab" aria-controls="nav-effectiveness" aria-selected="false">Aid Effectiveness Indictators</button>
                      <button class="nav-link" id="nav-analytical-tab" data-bs-toggle="tab" data-bs-target="#nav-analytical" type="button" role="tab" aria-controls="nav-analytical" aria-selected="false">Analytical Work & Mission</button>
                      <button class="nav-link" id="nav-attachments-tab" data-bs-toggle="tab" data-bs-target="#nav-attachments" type="button" role="tab" aria-controls="nav-attachments" aria-selected="false">Notes & Attachments</button>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <!-- <form action="" method="post"> -->
                      <div class="tab-pane fade show active" id="nav-basic" role="tabpanel" aria-labelledby="nav-basic-tab">
                        
                        <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                          <label for="managing-dp" class="col-sm-3 col-form-label">Mananging DP*</label>
                          <div class="col-sm-9">
                            <select name="managing-dp" id="managing-dp" class="form-select">
                              <option value="United Nations Development Programme">United Nations Development Programme</option>
                              <option value="United Nations Development Programme">United Nations Development Programme</option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3">
                          <label for="managing-dp" class="col-sm-3 col-form-label">Project/Program Title *</label>
                          <div class="col-sm-9">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>

                        <div class="mb-3 pt-3 pb-3 row mt-3 bg-light">
                          <div class="col-sm-6">
                            <div class="row">
                              <div class="col-sm-8">
                                <span>Is the assistance Channeled through Govt. Sector? </span>
                              </div>
                              <div class="col-sm-4">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="govt-sector-yes" value="Yes">
                                  <label class="form-check-label" for="govt-sector-yes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="govt-sector-no" value="No">
                                  <label class="form-check-label" for="govt-sector-no">No</label>
                                </div>
                                
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">

                            <div class="mb-3 row mt-3">
                              <label for="dp-no" class="col-sm-4 col-form-label">DP Project No.</label>
                              <div class="col-sm-8">
                                <input type="text" class="form-control" name="dp-no" id="dp-no">
                              </div>
                            </div>

                            <div class="mb-3 row mt-3">
                              <label for="iati-id" class="col-sm-4 col-form-label">IATI Identifier</label>
                              <div class="col-sm-8">
                                <input type="text" class="form-control" name="iati-id" id="iati-id">
                              </div>
                            </div>

                          </div>
                        </div>

                        <div class="mb-3 row mt-3">
                          <div class="col-sm-6">
                            <div class="row">
                              <div class="col-sm-8">
                                <span>Is Program Based Approach </span>
                              </div>
                              <div class="col-sm-4">
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="govt-sector-yes" value="Yes">
                                  <label class="form-check-label" for="govt-sector-yes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="govt-sector-no" value="No">
                                  <label class="form-check-label" for="govt-sector-no">No</label>
                                </div>
                                
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">

                            <div class="mb-3 row mt-3">
                              <label for="dp-no" class="col-sm-4 col-form-label">Project Sector</label>
                              <div class="col-sm-8">
                                <select name="managing-dp" id="managing-dp" class="form-select">
                                  <option disabled>- N/A -</option>
                                  <option value="United Nations Development Programme">United Nations Development Programme</option>
                                </select>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div class="accordion" id="accordionPanelsStayOpenExample">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="annualDevtFormSection-HeadOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#annualDevtFormSection" aria-expanded="true" aria-controls="annualDevtFormSection">
                                Annual Development Programme (ADP) Information [to be updated by ERD]
                              </button>
                            </h2>
                            <div id="annualDevtFormSection" class="accordion-collapse collapse show" aria-labelledby="annualDevtFormSection-HeadOne">
                              <div class="accordion-body">
                                #More fields
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                          <label for="adp-objective" class="col-sm-3 col-form-label">Objective</label>
                          <div class="col-sm-9">
                            <textarea class="form-control" id="adp-objective" rows="3"></textarea>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3">
                          <div class="col-sm-6">
                            <div class="row">
                              <label for="type-of-assistance" class="col-sm-4 col-form-label">Type of Assistance*</label>
                              <div class="col-sm-8">
                                <select name="type-of-assistance" class="form-select" id="type-of-assistance">
                                  <option value="Project Support" selected>Project Support</option>
                                  <option value="Project Support">Project Support</option>
                                  <option value="Project Support">Project Support</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="type-of-project" class="col-sm-4 col-form-label">Type of Project*</label>
                              <div class="col-sm-8">
                                <select name="type-of-project" class="form-select" id="type-of-project">
                                  <option value="Technical Asistance(TA) Project">Technical Asistance(TA) Project</option>
                                  <option value="Project Support">Project Support</option>
                                  <option value="Project Support">Project Support</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="agreement-date" class="col-sm-4 col-form-label"><small>Agreement Sign Date*</small></label>
                              <div class="col-sm-8">
                                <input type="date" name="agreement-date" class="form-control" id="agreement-date">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="effective-date" class="col-sm-5 col-form-label"> <small> Effective Date*</small></label>
                              <div class="col-sm-7">
                                <input type="date" name="effective-date" class="form-control" id="agreement-date">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="approval-date" class="col-sm-6 col-form-label"> <small>Project Approval Date*</small></label>
                              <div class="col-sm-6">
                                <input type="date" name="approval-date" class="form-control" id="approval-date">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3">
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="implemtation-status" class="col-sm-4 col-form-label"><small>Implementation Status</small></label>
                              <div class="col-sm-8">
                                <select name="implemtation-status" id="implemtation-status" class="form-select">
                                  <option value="On-going">On-going</option>
                                  <option value="On-pause">On-pause</option>
                                  <option value="Complete">Complete</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="start-date" class="col-sm-5 col-form-label"> <small> Planned Start Date*</small></label>
                              <div class="col-sm-7">
                                <input type="date" name="start-date" class="form-control" id="start-date">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="end-date" class="col-sm-6 col-form-label"> <small>Planned Completion Date*</small></label>
                              <div class="col-sm-6">
                                <input type="date" name="end-date" class="form-control" id="end-date">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3">
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="revision-status" class="col-sm-4 col-form-label"><small>Revision Status</small></label>
                              <div class="col-sm-8">
                                <select name="revision-status" id="revision-status" class="form-select">
                                  <option value="On-going">On-going</option>
                                  <option value="On-pause">On-pause</option>
                                  <option value="Complete">Complete</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="actual-start-date" class="col-sm-5 col-form-label"> <small> Actual Start Date*</small></label>
                              <div class="col-sm-7">
                                <input type="date" name="actual-start-date" class="form-control" id="actual-start-date">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="revised-completion-date" class="col-sm-6 col-form-label"> <small>Revised Completion Date*</small></label>
                              <div class="col-sm-6">
                                <input type="date" name="completiondate" class="form-control" id=" completiondate">
                              </div>
                            </div>
                          </div>
                        </div>

                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#executiveAgency"> Add Executing/Implementing Agency </button>

                        <!-- Modal -->
                        <div class="modal fade" id="executiveAgency" tabindex="-1" aria-labelledby="executiveAgencyLabel" aria-hidden="true">
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="executiveAgencyLabel">Add Executing/Implementing Agency</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label for="executing-agency-type" class="col-sm-4 col-form-label"><small>Executing Agency Type</small></label>
                                  <div class="col-sm-8">
                                    <select name="executing-agency-type" id="executing-agency-type" class="form-select">
                                      <option value="Government">Government</option>
                                      <option value="Organisation">Organisation</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label for="organization-type" class="col-sm-4 col-form-label"><small>Organization Type / Ministry</small></label>
                                  <div class="col-sm-8">
                                    <select name="organization-type" id="organization-type" class="form-select">
                                      <option value="Ministry of Environment and Forest">Ministry of Environment and Forest</option>
                                      <option value="Ministry of Lands">Ministry of Lands</option>
                                      <option value="Ministry of Health">Ministry of Health</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label for="executing-agency-type" class="col-sm-4 col-form-label"><small>Exectuing Agency Name</small></label>
                                  <div class="col-sm-8">
                                    <select name="executing-agency-type" id="executing-agency-type" class="form-select">
                                      <option value="Department of Environment">Department of Environment</option>
                                      <option value="Department of Lands">Department of Lands</option>
                                      <option value="Departnment of Disaster Preparedness">Departnment of Disaster Preparedness</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <div class="form-check">
                                    <label class="form-check-label" for="isThisTheLeadingAgency">
                                      Is Lead Executing Agency?
                                    </label>
                                    <input class="form-check-input" type="checkbox" value="Yes" id="isThisTheLeadingAgency">
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Add</button>
                              </div>
                            </div>
                          </div>
                        </div>   

                        <div class="mb-3 row mt-3">
                          <div class="accordion" id="focalpoint">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                  Focal Point (Development Partner /  Govt of South Sudan)
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                  <div class="row">
                                    <div class="col-sm-6">
                                      <legend class="text-center">Focal Point (DP)</legend>
                                      <fieldset class="border border-top-0 border-info">

                                        <div class="row mx-3 mt-3">
                                          <label for="dp-contact-name" class="col-sm-4 col-form-label"><small>Contact Name</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" name="dp-contact-name" class="form-control" id="dp-contact-name">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dp-title" class="col-sm-4 col-form-label"><small>Title</small></label>
                                          <div class="col-sm-8">
                                            <select name="dp-title" id="dp-title" class="form-select">
                                              <option value="Mr">Mr.</option>
                                              <option value="Mrs">Mrs.</option>
                                              <option value="Ms">Ms.</option>
                                              <option value="Gen">Gen.</option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dptelephone" class="col-sm-4 col-form-label"><small>Telephone</small></label>
                                          <div class="col-sm-8">
                                            <input type="tel" name="dbtelephone" class="form-control" id="dbtelephone">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dpfax" class="col-sm-4 col-form-label"><small>Fax</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" name="dpfax" class="form-control" id="dpfax">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dpemail" class="col-sm-4 col-form-label"><small>Fax</small></label>
                                          <div class="col-sm-8">
                                            <input type="email" name="dpemail" class="form-control" id="dpemail">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3 mb-4">
                                          <label for="dpaddress" class="col-sm-4 col-form-label"><small>Address</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" name="dpaddress" class="form-control" id="dpaddress">
                                          </div>
                                        </div>


                                      </fieldset>
                                    </div> <!-- Half One -->
                                    <div class="col-sm-6">

                                      <legend class="text-center">Focal Point (GoSS)</legend>
                                      <fieldset class="border border-top-0 border-info">

                                        <div class="row mx-3 mt-3">
                                          <label for="dp-contact-name" class="col-sm-4 col-form-label"><small>Contact Name</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" name="dp-contact-name" class="form-control" id="dp-contact-name">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dp-title" class="col-sm-4 col-form-label"><small>Title</small></label>
                                          <div class="col-sm-8">
                                            <select name="dp-title" id="dp-title" class="form-select">
                                              <option value="Mr">Mr.</option>
                                              <option value="Mrs">Mrs.</option>
                                              <option value="Ms">Ms.</option>
                                              <option value="Gen">Gen.</option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dptelephone" class="col-sm-4 col-form-label"><small>Telephone</small></label>
                                          <div class="col-sm-8">
                                            <input type="tel" name="dbtelephone" class="form-control" id="dbtelephone">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dpfax" class="col-sm-4 col-form-label"><small>Fax</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" name="dpfax" class="form-control" id="dpfax">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="dpemail" class="col-sm-4 col-form-label"><small>Fax</small></label>
                                          <div class="col-sm-8">
                                            <input type="email" name="dpemail" class="form-control" id="dpemail">
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3 mb-4">
                                          <label for="dpaddress" class="col-sm-4 col-form-label"><small>Address</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" name="dpaddress" class="form-control" id="dpaddress">
                                          </div>
                                        </div>


                                      </fieldset>

                                    </div>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> <!-- Main row -->



                      </div><!-- Project Basic Info -->

                      <div class="tab-pane fade" id="nav-funding" role="tabpanel" aria-labelledby="nav-funding-tab">

                        <div class="mb-3 row mt-3 pt-3 pb-3">
                          <label for="agreementtype" class="col-sm-3 col-form-label">Agreement Type</label>
                          <div class="col-sm-6">
                            <select name="agreementtype" id="agreementtype" class="form-select">
                              <option value="Project Document">Project Document</option>
                              <option value="Project Document">Project Document</option>
                            </select>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                          <label for="aidagreementtitle" class="col-sm-3 col-form-label">Aid Agreement Title</label>
                          <div class="col-sm-9">
                            <textarea name="aidagreementtitle" id="aidagreementtitle" class="form-control" cols="30" rows="10"></textarea>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                          <div class="col-sm-6">
                            <div class="row">
                              <label for="cofundedproject" class="col-sm-6 col-form-label">Is Co-funded Project</label> 
                              <div class="col-sm-6">
                                <input class="form-check-input" type="checkbox" value="Yes" id="cofundedproject">[Check if Yes]
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="dpcontributioninusd" class="col-sm-6 col-form-label">DP Contrubution in USD</label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="dpcontributioninusd" id="dpcontributioninusd" class="form-control">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3 pt-3 pb-3 bg-light">

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="dpcontributioninowncurrency" class="col-sm-6 col-form-label">DP Contrubution in Own Currency *</label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="dpcontributioninowncurrency" id="dpcontributioninowncurrency" class="form-control">
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="dpcontributioncurrency" class="col-sm-6 col-form-label">DP Contrubution Currency *</label>
                              <div class="col-sm-6">
                                <select name="dpcontributioncurrency" class="form-select" id="dpcontributioncurrency">
                                  <option value="US Dollar">US Dollar</option>
                                  <option value="Euros">Euros</option>
                                  <option value="Pound">Pound</option>
                                </select>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="mb-3 row pt-3 pb-3 bg-light">

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="exchangeratetousd" class="col-sm-6 col-form-label">Exchange Rate to USD <small class="text-success">(1 USD = ? DP Currrency)</small></label>
                              
                              <div class="col-sm-6">
                                <input type="number" min="1" name="exchangeratetousd" id="exchangeratetousd" class="form-control">
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="totaldpcontributioninusd" class="col-sm-6 col-form-label">Total DP Contrubution in USD</label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="totaldpcontributioninusd" id="totaldpcontributioninusd" class="form-control">
                              </div>
                            </div>
                          </div>
                          
                        </div>

                        <div class="mb-3 row pt-3 pb-3 mt-3 bg-light">

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="gobsharinginsdg" class="col-sm-6 col-form-label">GoB Sharing in SDG </label>
                              
                              <div class="col-sm-6">
                                <input type="number" min="1" name="gobsharinginsdg" id="gobsharinginsdg" class="form-control">
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="exhangerateofsdg" class="col-sm-6 col-form-label">Exchange Rate of SDG <small class="text-success">(1 USD = ? DP Currrency)</small></label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="exhangerateofsdg" id="exhangerateofsdg" class="form-control">
                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="mb-3 row pt-3 pb-3 mt-3 bg-light">

                          <div class="col-sm-12">
                            <div class="row">
                              <label for="othercontributionby" class="col-sm-3 col-form-label">Other Contribution By </label>
                              <div class="col-sm-9">
                                <input type="text" name="othercontributionby" id="othercontributionby" class="form-control">
                              </div>
                            </div>
                          </div>

                        </div>
                        
                        <div class="mb-3 row mt-3 pt-3 pb-3 bg-light">

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="othercontribution" class="col-sm-6 col-form-label">Other Contribution </label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="othercontribution" id="othercontribution" class="form-control">
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="dpcontributioncurrency" class="col-sm-6 col-form-label">DP Contrubution Currency *</label>
                              <div class="col-sm-6">
                                <select name="dpcontributioncurrency" class="form-select" id="dpcontributioncurrency">
                                  <option value="US Dollar">US Dollar</option>
                                  <option value="Euros">Euros</option>
                                  <option value="Pound">Pound</option>
                                </select>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="mb-3 row mt-3 pt-3 pb-3 bg-light">

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="otherexchangeratetousd" class="col-sm-6 col-form-label">Other Exchange Rate to USD <small class="text-success">(1 USD =? Other Currency)</small> </label>
                              <div class="col-sm-6">
                                <input type="text" name="otherexchangeratetousd" id="otherexchangeratetousd" placeholder="1 USD = ? Other Currency" class="form-control">
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="othercontributioninusd" class="col-sm-6 col-form-label">Other Contribution in USD</label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="othercontributioninusd" id="othercontributioninusd" class="form-control">
                              </div>
                            </div>
                          </div>

                        </div>


                        <div class="mb-3 row mt-3 pt-3 pb-3 bg-light">

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="dateofexchangerate" class="col-sm-6 col-form-label">Date Of Exchange Rate </label>
                              <div class="col-sm-6">
                                <input type="date" name="dateofexchangerate" id="dateofexchangerate" class="form-control">
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="row">
                              <label for="othercontributioninusd" class="col-sm-6 col-form-label">Project Cost in USD</label>
                              <div class="col-sm-6">
                                <input type="number" min="1" name="othercontributioninusd" id="othercontributioninusd" class="form-control">
                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="accordion" id="CommitmentInformation">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="CommitmentInformation-HeadOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CommitmentInformation" aria-expanded="false" aria-controls="CommitmentInformation">
                                Commitment Information
                              </button>
                            </h2>
                            <div id="CommitmentInformation" class="accordion-collapse collapse show" aria-labelledby="CommitmentInformation-HeadOne">
                              <div class="accordion-body">
                                
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCommitmentInformation"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="addCommitmentInformation" tabindex="-1" aria-labelledby="addCommitmentInformationLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="addCommitmentInformationLabel">Add/Edit Commitment</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                          <label for="development_partner" class="col-sm-4 col-form-label"><small>Executing Agency Type</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="development_partner" id="development_partner" placeholder="United Nations Development programme">
                                          </div>
                                        </div>
                                        <div class="row mx-3 mt-3">
                                          <label for="aid_category" class="col-sm-4 col-form-label"><small>Aid Category</small></label>
                                          <div class="col-sm-8">
                                            <div class="row">
                                              <div class="col-sm-4">
                                                <select name="aid_category" id="aid_category" class="form-select">
                                                  <option value="Grant">Grant</option>
                                                  <option value="Donation">Donation</option>
                                                  <option value="Loan">Loan</option>
                                                </select>
                                              </div>
                                              <div class="col-sm-8">
                                                <div class="row">
                                                  <label for="comes_from_trust_fund" class="col-sm-6 col-form-label"><small>Does this money come fom Trust Fund? (if yes, select TF identifier)</small></label>
                                                  <div class="col-sm-6">
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_yes" value="option1">
                                                      <label class="form-check-label" for="comes_from_trust_fund_yes">Yes</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_no" value="option2">
                                                      <label class="form-check-label" for="comes_from_trust_fund_no">No</label>
                                                    </div>
                                                    <select name="aid_category" id="aid_category" class="form-select">
                                                      <option selected disabled>- Select One -</option>
                                                      <option value="Grant">Grant</option>
                                                      <option value="Donation">Donation</option>
                                                      <option value="Loan">Loan</option>
                                                    </select>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>  
                                      
                                          </div>
                                        </div>

                                        <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="commitment_amount" class="col-sm-5 col-form-label"><small>Commitment Amount</small></label>
                                              <div class="col-sm-6">
                                                <input type="number" class="form-control" min="1" name="commitment_amount" placeholder="1000000" id="commitment_amount">
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="commitment_currency" class="col-sm-4 col-form-label"><small>Currency</small></label>
                                              <div class="col-sm-6">
                                                <select name="commitment_currency" id="commitment_currency" class="form-select">
                                                  <option value="US Dollar">US Dollar</option>
                                                  <option value="Pounds">Pounds</option>
                                                  <option value="Canadian Dollar">Canadian Dollar</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate">
                                                <small>Exchange Rate To USD <br> <span class="text-success">(1 USD = ? DP Cuurrency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="text" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in USD </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" min="1" name="amount_in_usd" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate_to_sp">
                                                <small>Exchange Rate To SSP <br> <span class="text-success">(1 USD = ? SSP Cuurrency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in BDT </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="text" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Add</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <table class="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Development Partner</th>
                                      <th>Aid Category</th>
                                      <th>Loan/Grant Number</th>
                                      <th>Agreement Date (dd/MM/yyyy)</th>
                                      <th>Amount in DP's Currency</th>
                                      <th>Amount in USD</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>UNDP</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011</td>
                                      <td>1,000,000.00</td>
                                      <td>1,000,000.00</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DANIDA</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011</td>
                                      <td>2,000,000.00</td>
                                      <td>351,493.85</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DFID</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>08/09/2011</td>
                                      <td>650,000.00</td>
                                      <td>1,031,746.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>Australian Aid</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>01/12/2011</td>
                                      <td>750,000.00</td>
                                      <td>730,283.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>Total</td>
                                      <td>&nbsp;</td>
                                      <td>3,113,522.97</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                              <span aria-hidden="true">&laquo;</span>
                                            </a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true">&raquo;</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </tr>
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="accordion mt-4" id="plannedDisbursementInformation">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="plannedDisbursementInformation-HeadOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#plannedDisbursementInformation" aria-expanded="true" aria-controls="plannedDisbursementInformation">
                                Planned Disbursement Information
                              </button>
                            </h2>
                            <div id="plannedDisbursementInformation" class="accordion-collapse collapse show" aria-labelledby="plannedDisbursementInformation-HeadOne">
                              <div class="accordion-body">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPlannedDisbursementInformation"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="addPlannedDisbursementInformation" tabindex="-1" aria-labelledby="addPlannedDisbursementInformationLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="addPlannedDisbursementInformationLabel">Add/Edit Planned Disbursement</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                          <label for="development_partner" class="col-sm-4 col-form-label"><small>Development Partner</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="development_partner" id="development_partner" placeholder="United Nations Development programme">
                                          </div>
                                        </div>
                                        <div class="row mx-3 mt-3">
                                          <label for="aid_category" class="col-sm-4 col-form-label"><small>Aid Category</small></label>
                                          <div class="col-sm-8">
                                            <div class="row">
                                              <div class="col-sm-4">
                                                <select name="aid_category" id="aid_category" class="form-select">
                                                  <option value="Grant">Grant</option>
                                                  <option value="Donation">Donation</option>
                                                  <option value="Loan">Loan</option>
                                                </select>
                                              </div>
                                              <div class="col-sm-8">
                                                <div class="row">
                                                  <label for="comes_from_trust_fund" class="col-sm-6 col-form-label"><small>Does this money come fom Trust Fund? (if yes, select TF identifier)</small></label>
                                                  <div class="col-sm-6">
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_yes" value="option1">
                                                      <label class="form-check-label" for="comes_from_trust_fund_yes">Yes</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_no" value="option2">
                                                      <label class="form-check-label" for="comes_from_trust_fund_no">No</label>
                                                    </div>
                                                    <select name="aid_category" id="aid_category" class="form-select">
                                                      <option selected disabled>- Select One -</option>
                                                      <option value="Grant">Grant</option>
                                                      <option value="Donation">Donation</option>
                                                      <option value="Loan">Loan</option>
                                                    </select>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>  
                                      
                                          </div>
                                        </div>

                                        <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="planned_amount" class="col-sm-5 col-form-label"><small>Planned Amount</small></label>
                                              <div class="col-sm-6">
                                                <input type="number" class="form-control" min="1" name="planned_amount" placeholder="1000000" id="planned_amount">
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="planned_currency" class="col-sm-4 col-form-label"><small>Currency</small></label>
                                              <div class="col-sm-6">
                                                <select name="planned_currency" id="planned_currency" class="form-select">
                                                  <option value="US Dollar">US Dollar</option>
                                                  <option value="Pounds">Pounds</option>
                                                  <option value="Canadian Dollar">Canadian Dollar</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate">
                                                <small>Exchange Rate To USD <br> <span class="text-success">(1 USD = ? DP Currency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="text" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in USD </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" min="1" name="amount_in_usd" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate_to_sp">
                                                <small>Exchange Rate To SSP <br> <span class="text-success">(1 USD = ? SSP Cuurrency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in SSP </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <table class="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Development Partner</th>
                                      <th>Aid Category</th>
                                      <th>Loan/Grant Number</th>
                                      <th>Planned Disbursement Period (dd/MM/yyyy)</th>
                                      <th>Amount in DP's Currency</th>
                                      <th>Amount in USD</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>UNDP</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011 - 30/08/2012</td>
                                      <td>1,000,000.00</td>
                                      <td>1,000,000.00</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DANIDA</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011 - 12/08/2012</td>
                                      <td>2,000,000.00</td>
                                      <td>351,493.85</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DFID</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>08/09/2011 - 15/10/2011</td>
                                      <td>650,000.00</td>
                                      <td>1,031,746.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>Australian Aid</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>01/12/2011 - 14/12/2011</td>
                                      <td>750,000.00</td>
                                      <td>730,283.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>Total</td>
                                      <td>&nbsp;</td>
                                      <td>3,113,522.97</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                              <span aria-hidden="true">&laquo;</span>
                                            </a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true">&raquo;</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </tr>
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="accordion mt-4" id="actualDisbursementInformation">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="actualDisbursementInformation-HeadOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#actualDisbursementInformation" aria-expanded="false" aria-controls="actualDisbursementInformation">
                                Actual Disbursement Information
                              </button>
                            </h2>
                            <div id="actualDisbursementInformation" class="accordion-collapse collapse show" aria-labelledby="actualDisbursementInformation-HeadOne">
                              <div class="accordion-body">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addActualDisbursementInformation"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="addActualDisbursementInformation" tabindex="-1" aria-labelledby="addActualDisbursementInformationLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="addActualDisbursementInformationLabel">Add/Edit Actual Disbursement</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                          <label for="development_partner" class="col-sm-4 col-form-label"><small>Development Partner</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="development_partner" id="development_partner" placeholder="United Nations Development programme">
                                          </div>
                                        </div>
                                        <div class="row mx-3 mt-3">
                                          <label for="aid_category" class="col-sm-2 col-form-label"><small>Aid Category</small></label>
                                          <div class="col-sm-10">
                                            <div class="row">
                                              <div class="col-sm-4">
                                                <select name="aid_category" id="aid_category" class="form-select">
                                                  <option value="Grant">Grant</option>
                                                  <option value="Donation">Donation</option>
                                                  <option value="Loan">Loan</option>
                                                </select>
                                              </div>
                                              <div class="col-sm-8">
                                                <div class="row">
                                                  <label for="comes_from_trust_fund" class="col-sm-6 col-form-label"><small>Does this money come fom Trust Fund? (if yes, select TF identifier)</small></label>
                                                  <div class="col-sm-6">
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_yes" value="option1">
                                                      <label class="form-check-label" for="comes_from_trust_fund_yes">Yes</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_no" value="option2">
                                                      <label class="form-check-label" for="comes_from_trust_fund_no">No</label>
                                                    </div>
                                                    <select name="aid_category" id="aid_category" class="form-select">
                                                      <option selected disabled>- Select One -</option>
                                                      <option value="Grant">Grant</option>
                                                      <option value="Donation">Donation</option>
                                                      <option value="Loan">Loan</option>
                                                    </select>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>  
                                      
                                          </div>
                                        </div>

                                        <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="planned_amount" class="col-sm-5 col-form-label"><small>Planned Amount</small></label>
                                              <div class="col-sm-6">
                                                <input type="number" class="form-control" min="1" name="planned_amount" placeholder="1000000" id="planned_amount">
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="planned_currency" class="col-sm-4 col-form-label"><small>Currency</small></label>
                                              <div class="col-sm-6">
                                                <select name="planned_currency" id="planned_currency" class="form-select">
                                                  <option value="US Dollar">US Dollar</option>
                                                  <option value="Pounds">Pounds</option>
                                                  <option value="Canadian Dollar">Canadian Dollar</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate">
                                                <small>Exchange Rate To USD <br> <span class="text-success">(1 USD = ? DP Currency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="text" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in USD </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" min="1" name="amount_in_usd" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate_to_sp">
                                                <small>Exchange Rate To SSP <br> <span class="text-success">(1 USD = ? SSP Cuurrency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in SSP </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-12">
                                            <div class="row">
                                              <label class="form-check-label col-sm-2" for="remarks">
                                                <small>Remarks </small>
                                              </label>
                                              <div class="col-sm-8">
                                                <textarea name="remarks" id="remarks" class="form-control" cols="30" rows="5"></textarea>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <table class="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Development Partner</th>
                                      <th>Aid Category</th>
                                      <th>Loan/Grant Number</th>
                                      <th>Disbursement Period (dd/MM/yyyy)</th>
                                      <th>Amount in DP's Currency</th>
                                      <th>Amount in USD</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>UNDP</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011 - 14/09/2011</td>
                                      <td>1,000,000.00</td>
                                      <td>1,000,000.00</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DANIDA</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011 - 14/09/2011</td>
                                      <td>2,000,000.00</td>
                                      <td>351,493.85</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DFID</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>08/09/2011 - 08/09/2011</td>
                                      <td>650,000.00</td>
                                      <td>1,031,746.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>Australian Aid</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>01/12/2011 - 01/12/2011</td>
                                      <td>750,000.00</td>
                                      <td>730,283.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>Total</td>
                                      <td>&nbsp;</td>
                                      <td>3,113,522.97</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                              <span aria-hidden="true">&laquo;</span>
                                            </a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true">&raquo;</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </tr>
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="accordion mt-4" id="expenditureofAidInformation">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="expenditureofAidInformation-HeadOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#expenditureofAidInformation" aria-expanded="false" aria-controls="expenditureofAidInformation">
                                Expenditure on Aid Information
                              </button>
                            </h2>
                            <div id="expenditureofAidInformation" class="accordion-collapse collapse show" aria-labelledby="expenditureofAidInformation-HeadOne">
                              <div class="accordion-body">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addexpenditureofAidInformation"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="addexpenditureofAidInformation" tabindex="-1" aria-labelledby="addexpenditureofAidInformationLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="addexpenditureofAidInformationLabel">Add/Edit Actual Disbursement</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                          <label for="development_partner" class="col-sm-4 col-form-label"><small>Development Partner</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="development_partner" id="development_partner" placeholder="United Nations Development programme">
                                          </div>
                                        </div>
                                        <div class="row mx-3 mt-3">
                                          <label for="aid_category" class="col-sm-2 col-form-label"><small>Aid Category</small></label>
                                          <div class="col-sm-10">
                                            <div class="row">
                                              <div class="col-sm-4">
                                                <select name="aid_category" id="aid_category" class="form-select">
                                                  <option value="Grant">Grant</option>
                                                  <option value="Donation">Donation</option>
                                                  <option value="Loan">Loan</option>
                                                </select>
                                              </div>
                                              <div class="col-sm-8">
                                                <div class="row">
                                                  <label for="comes_from_trust_fund" class="col-sm-6 col-form-label"><small>Does this money come fom Trust Fund? (if yes, select TF identifier)</small></label>
                                                  <div class="col-sm-6">
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_yes" value="option1">
                                                      <label class="form-check-label" for="comes_from_trust_fund_yes">Yes</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                      <input class="form-check-input" type="radio" name="comes_from_trust_fund" id="comes_from_trust_fund_no" value="option2">
                                                      <label class="form-check-label" for="comes_from_trust_fund_no">No</label>
                                                    </div>
                                                    <select name="aid_category" id="aid_category" class="form-select">
                                                      <option selected disabled>- Select One -</option>
                                                      <option value="Grant">Grant</option>
                                                      <option value="Donation">Donation</option>
                                                      <option value="Loan">Loan</option>
                                                    </select>
                                                  </div>

                                                </div>
                                              </div>
                                            </div>  
                                      
                                          </div>
                                        </div>

                                        <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="planned_amount" class="col-sm-5 col-form-label"><small>Planned Amount</small></label>
                                              <div class="col-sm-6">
                                                <input type="number" class="form-control" min="1" name="planned_amount" placeholder="1000000" id="planned_amount">
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="planned_currency" class="col-sm-4 col-form-label"><small>Currency</small></label>
                                              <div class="col-sm-6">
                                                <select name="planned_currency" id="planned_currency" class="form-select">
                                                  <option value="US Dollar">US Dollar</option>
                                                  <option value="Pounds">Pounds</option>
                                                  <option value="Canadian Dollar">Canadian Dollar</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate">
                                                <small>Exchange Rate To USD <br> <span class="text-success">(1 USD = ? DP Currency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="text" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in USD </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" min="1" name="amount_in_usd" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-6" for="commitment_exchange_rate_to_sp">
                                                <small>Exchange Rate To SSP <br> <span class="text-success">(1 USD = ? SSP Cuurrency)</span>  </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="commitment_exchange_rate">
                                              </div>
                                            </div>
                                          </div>

                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label class="form-check-label col-sm-4" for="amount_in_usd">
                                                <small>Amount in SSP </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="number" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <div class="col-sm-12">
                                            <div class="row">
                                              <label class="form-check-label col-sm-2" for="remarks">
                                                <small>Remarks </small>
                                              </label>
                                              <div class="col-sm-8">
                                                <textarea name="remarks" id="remarks" class="form-control" cols="30" rows="5"></textarea>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <table class="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Development Partner</th>
                                      <th>Aid Category</th>
                                      <th>Loan/Grant Number</th>
                                      <th>Reporting Period (dd/MM/yyyy)</th>
                                      <th>Amount in DP's Currency</th>
                                      <th>Amount in USD</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>UNDP</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011 - 14/09/2012</td>
                                      <td>1,000,000.00</td>
                                      <td>1,000,000.00</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DANIDA</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>14/09/2011 - 14/09/2012</td>
                                      <td>2,000,000.00</td>
                                      <td>351,493.85</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>DFID</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>08/09/2011 - 08/09/2012</td>
                                      <td>650,000.00</td>
                                      <td>1,031,746.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>Australian Aid</td>
                                      <td>Grant</td>
                                      <td>&nbsp;</td>
                                      <td>01/12/2011 - 01/12/2012</td>
                                      <td>750,000.00</td>
                                      <td>730,283.03</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>Total</td>
                                      <td>&nbsp;</td>
                                      <td>3,113,522.97</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                              <span aria-hidden="true">&laquo;</span>
                                            </a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true">&raquo;</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </tr>
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div><!-- Funding Info -->

                      <div class="tab-pane fade" id="nav-sector" role="tabpanel" aria-labelledby="nav-sector-tab">

                        <div class="accordion" id="sectorContributionCollapse">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="sectorsHeading">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sectorsCollapse" aria-expanded="true" aria-controls="sectorsCollapse">
                                Sectors
                              </button>
                            </h2>
                            <div id="sectorsCollapse" class="accordion-collapse collapse" aria-labelledby="sectorsHeading" data-bs-parent="#sectorContributionCollapse">
                              <div class="accordion-body">
                                <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#sectorContribution"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="sectorContribution" tabindex="-1" aria-labelledby="sectorContributionLabel" aria-hidden="true">
                                  <div class="modal-dialog modal-md modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="sectorContributionLabel">Add Sector Information</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                          <label for="sector" class="col-sm-4 col-form-label"><small>Sector</small></label>
                                          <div class="col-sm-8">
                                            <select name="sector" id="sector" class="form-control">
                                              <option value="Public Administration">Public Administration</option>
                                              <option value="Public Health">Public Health</option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="sub_sector" class="col-sm-4 col-form-label"><small>Sub-Sector</small></label>
                                          <div class="col-sm-8">
                                            <select name="sub_sector" id="sub_sector" class="form-control">
                                              <option value="N/A" selected>Not Applicable</option>
                                              <option value="Public Administration">Public Administration</option>
                                              <option value="Public Health">Public Health</option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="row mx-3 mt-3">
                                          <label for="allocation" class="col-sm-4 col-form-label"><small>Allocation (%)</small></label>
                                          <div class="col-sm-4">
                                            <input type="number" class="form-control" name="allocation" id="allocation" placeholder="100.00">
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                      </div>
                                    </div>
                                  </div>
                                </div> <!-- modal -->

                                <table class="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Sector Name</th>
                                      <th>Sub-Sector Name</th>
                                      <th>Percentage of Allocation(%)</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Public Administration</td>
                                      <td>Not Applicable</td>
                                      <td>100.00</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr class="text-muted">
                                      <td>Total</td>
                                      <td>&nbsp;</td>
                                      <td>100.00</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                      <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Previous">
                                              <span aria-hidden="true">&laquo;</span>
                                            </a>
                                          </li>
                                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                                          <li class="page-item">
                                            <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true">&raquo;</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </nav>
                                    </tr>
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div> <!-- sectorsCollapse -->

                            

                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="thematicHeading">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#thematicArea" aria-expanded="false" aria-controls="thematicArea">
                                Thematic Area
                              </button>
                            </h2>
                            <div id="thematicArea" class="accordion-collapse collapse" aria-labelledby="thematicHeading" data-bs-parent="#sectorContributionCollapse">
                              <div class="accordion-body">
                                <table class="table-bordered table-stripped table-responsive table">
                                  <thead>
                                    <tr>
                                      <th>Thematic Area</th>
                                      <th>Percentage of Allocation(%)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Income and Poverty</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Human Resource</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Water and Sanitation</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Gender Equality</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Environmental Sustainability</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Information Communication Technology(ICT)</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Urban Development</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr>
                                      <td>Governance</td>
                                      <td>100.00</td>
                                    </tr>
                                    <tr>
                                      <td>Others</td>
                                      <td>0.00</td>
                                    </tr>
                                    <tr class="text-muted">
                                      <td>Total:</td>
                                      <td>100.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>

                          <button class="btn-primary btn mt-2 float-right">Save</button>
                        </div> <!-- sectorContributionCollapse -->

                      </div><!-- Sector Contribution -->

                      <div class="tab-pane fade" id="nav-geographic" role="tabpanel" aria-labelledby="nav-geographic-tab">

                        <div class="row mx-2 mt-2 mb-2">
                          <label for="countrywide" class="form-control-label col-md-2">Country Wide?</label>
                          <div class="col-md-5">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="countryWideOptions" id="yesRadioBtn" value="Yes">
                              <label class="form-check-label" for="yesRadioBtn">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="countryWideOptions" id="noRadioBtn" value="No">
                              <label class="form-check-label" for="noRadioBtn">No</label>
                            </div>
                          </div>
                        </div>

                        <div class="accordion" id="geographic_allocation_accordion">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="geographic_allocation_list">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#geographic_allocation_collapse" aria-expanded="true" aria-controls="geographic_allocation_collapse">
                                Geographic Allocation List
                              </button>
                            </h2>
                            <div id="geographic_allocation_collapse" class="accordion-collapse collapse show" aria-labelledby="geographic_allocation_list" data-bs-parent="#geographic_allocation_accordion">
                              <div class="accordion-body">
                                <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#geographic_allocation_"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="geographic_allocation_" tabindex="-1" aria-labelledby="geographic_allocation_Label" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="geographic_allocation_Label">Add Geographic Allocation Information</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">

                                          <div class="col-md-3">
                                            &nbsp;
                                            <table class="table table-bordered table-responsive">
                                              <thead>
                                                <tr>
                                                  <th scope="col"><input type="checkbox" name="" id=""></th>
                                                  <th scope="col">Division Name</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Barisal</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Houston</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Brazil</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Mexico</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Sylhet</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>

                                          <div class="col-md-3">
                                            &nbsp;
                                            <table class="table table-bordered table-responsive">
                                              <thead>
                                                <tr>
                                                  <th scope="col"><input type="checkbox" name="" id=""></th>
                                                  <th scope="col">District Name</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Kampala</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Jinja</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Arua</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Gulu</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Mbale</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Kabale</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Bushenyi</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Kamuli</td>
                                                </tr>
                                                
                                              </tbody>
                                            </table>
                                          </div>

                                          <div class="col-md-6">
                                            &nbsp;
                                            <table class="table table-bordered table-responsive">
                                              <thead>
                                                <tr>
                                                  <th scope="col"><input type="checkbox" name="" id=""></th>
                                                  <th scope="col">Type</th>
                                                  <th scope="col">District</th>
                                                  <th scope="col">Upazila</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                <tr>
                                                  <td><input type="checkbox" name="" id=""></td>
                                                  <td>Upazila</td>
                                                  <td>Bargain</td>
                                                  <td>Amatail</td>
                                                </tr>
                                                
                                              </tbody>
                                            </table>
                                          </div>

                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Save</button>
                                      </div>
                                    </div>
                                  </div>
                                </div> <!-- modal -->


                                <table class="table table-bordered table-responsive mt-2">
                                  <thead>
                                    <tr>
                                      <th scope="col">Division Name</th>
                                      <th scope="col">District Name</th>
                                      <th scope="col">Upazila Name</th>
                                      <th scope="col">Percentage of Allocation(%)</th>
                                      <th scope="col">Actions</th>

                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Bartal</td>
                                      <td>Barguma</td>
                                      <td>Amatail</td>
                                      <td>20.00</td>
                                      <td>delete</td>
                                    </tr>
                                    <tr>
                                      <td>Bartal</td>
                                      <td>Barguma</td>
                                      <td>Amatail</td>
                                      <td>20.00</td>
                                      <td>delete</td>
                                    </tr>
                                    <tr>
                                      <td>Bartal</td>
                                      <td>Barguma</td>
                                      <td>Amatail</td>
                                      <td>20.00</td>
                                      <td>delete</td>
                                    </tr>
                                   
                                    <tr class="text-muted">
                                      <td colspan="3">Total</td>
                                      <td>100.00</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    
                                  </tbody>
                                </table>
                                
                                
                              </div>
                            </div>
                          </div>

                        </div> <!-- Geographic Allocation List -->

                      </div> <!-- nav-geographic -->


                      <div class="tab-pane fade" id="nav-effectiveness" role="tabpanel" aria-labelledby="nav-effectiveness-tab">
                        <h3>Aid Effectiveness Indicators</h3>
                        <hr>
                        <div class="row mt-3">
                          <label for="survey_year" class="form-control-label col-sm-2">Survey Year</label>
                          <div class="col-md-4">
                            <select class="form-control" name="survey_year" id="survey_year">
                              <option selected disabled>-- Select One --</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                            </select>
                          </div>
                        </div>

                        <h4 class="mt-4">1. Use of National Public Financial Management System (Busan Indicator 9b)</h4>
                        <hr>
                        <br>
                        <h5>a) Use of national budget execution procedures</h5>
                        <hr>

                        <div class="row mx-2 mt-2 mb-2">
                          <label for="inBudget" class="form-control-label col-md-10">i) Are your funds included in the annual budget approved by country legislature?</label>
                          <div class="col-md-2">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inBudgetOptions" id="yesRadioBtn" value="Yes">
                              <label class="form-check-label" for="yesRadioBtn">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inBudgetOptions" checked id="noRadioBtn" value="No">
                              <label class="form-check-label" for="noRadioBtn">No</label>
                            </div>
                          </div>
                        </div>

                        <div class="row mx-2 mt-2 mb-2">
                          <label for="budgetExecutionProcedure" class="form-control-label col-md-10">ii) Are your funds subject to established country budget execution procedures?</label>
                          <div class="col-md-2">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="budgetExecutionProcedureOptions" id="yesRadioBtn" value="Yes">
                              <label class="form-check-label" for="yesRadioBtn">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="budgetExecutionProcedureOptions" checked id="noRadioBtn" value="No">
                              <label class="form-check-label" for="noRadioBtn">No</label>
                            </div>
                          </div>
                        </div>

                        <div class="row mx-2 mt-2 mb-2">
                          <label for="budgetExecutionProcedure" class="form-control-label col-md-10">iii) Are your funds processed (e.g. deposited & disbursed) through the established country treasury system?</label>
                          <div class="col-md-2">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="budgetExecutionProcedureOptions" id="yesRadioBtn" value="Yes">
                              <label class="form-check-label" for="yesRadioBtn">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="budgetExecutionProcedureOptions" checked id="noRadioBtn" value="No">
                              <label class="form-check-label" for="noRadioBtn">No</label>
                            </div>
                          </div>
                        </div>



                      </div>
                      <div class="tab-pane fade" id="nav-analytical" role="tabpanel" aria-labelledby="nav-analytical-tab">
                        Analytical Work & Mission

                      </div>
                      <div class="tab-pane fade" id="nav-attachments" role="tabpanel" aria-labelledby="nav-attachments-tab">
                        Notes & Attachments

                      </div>
                    <!-- </form> -->
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

<style scoped>
.project-page {
  padding-top: 4em;
  padding-bottom: 4em;
}
</style>