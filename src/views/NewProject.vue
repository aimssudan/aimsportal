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
                          <div class="modal-dialog">
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
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#CommitmentInformation" aria-expanded="true" aria-controls="CommitmentInformation">
                                Commitment Information
                              </button>
                            </h2>
                            <div id="CommitmentInformation" class="accordion-collapse collapse show" aria-labelledby="CommitmentInformation-HeadOne">
                              <div class="accordion-body">
                                #Commitment Information
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="accordion mt-4" id="plannedDisbursementInformation">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="plannedDisbursementInformation-HeadOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#plannedDisbursementInformation" aria-expanded="true" aria-controls="plannedDisbursementInformation">
                                Planned Disbursement Information
                              </button>
                            </h2>
                            <div id="plannedDisbursementInformation" class="accordion-collapse collapse show" aria-labelledby="plannedDisbursementInformation-HeadOne">
                              <div class="accordion-body">
                                #Planned Disbursement Information
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="accordion mt-4" id="actualDisbursementInformation">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="actualDisbursementInformation-HeadOne">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#actualDisbursementInformation" aria-expanded="true" aria-controls="actualDisbursementInformation">
                                Actual Disbursement Information
                              </button>
                            </h2>
                            <div id="actualDisbursementInformation" class="accordion-collapse collapse show" aria-labelledby="actualDisbursementInformation-HeadOne">
                              <div class="accordion-body">
                                #Actual Disbursement Information
                              </div>
                            </div>
                          </div>
                        </div>

                      </div><!-- Funding Info -->

                      <div class="tab-pane fade" id="nav-sector" role="tabpanel" aria-labelledby="nav-sector-tab">
                        Sector Contribution

                      </div>
                      <div class="tab-pane fade" id="nav-geographic" role="tabpanel" aria-labelledby="nav-geographic-tab">
                        Geographic Contribution

                      </div>
                      <div class="tab-pane fade" id="nav-effectiveness" role="tabpanel" aria-labelledby="nav-effectiveness-tab">
                        Aid Effectiveness Indictators

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