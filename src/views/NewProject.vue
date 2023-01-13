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
                  <div v-if="isLoading" class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <flash-error :hasError="apiErrors" :errors="errors" @dismissError="apiErrors = false"></flash-error>
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-basic-tab" data-bs-toggle="tab" data-bs-target="#nav-basic" type="button" role="tab" aria-controls="nav-basic" aria-selected="true">Project Basic Info</button>
                      <button class="nav-link" id="nav-funding-tab" data-bs-toggle="tab" data-bs-target="#nav-funding" type="button" role="tab" aria-controls="nav-funding" aria-selected="false">Financials</button>
                      <button class="nav-link" id="nav-sector-tab" data-bs-toggle="tab" data-bs-target="#nav-sector" type="button" role="tab" aria-controls="nav-sector" aria-selected="false">Sector Contribution</button>
                      <button class="nav-link" id="nav-geographic-tab" data-bs-toggle="tab" data-bs-target="#nav-geographic" type="button" role="tab" aria-controls="nav-geographic" aria-selected="false">Geographic Contribution</button>
                      <button class="nav-link" id="nav-attachments-tab" data-bs-toggle="tab" data-bs-target="#nav-attachments" type="button" role="tab" aria-controls="nav-attachments" aria-selected="false">Additional Information</button>
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    <!-- <form action="" method="post"> -->
                      <div class="tab-pane fade show active" id="nav-basic" role="tabpanel" aria-labelledby="nav-basic-tab">
                        
                        <div class="mb-3 row mt-3">
                          <label for="managing-dp" class="col-sm-3 col-form-label">Project Title *</label>
                          <div class="col-sm-9">
                            <textarea v-model="project_title" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                          <label for="adp-objective" class="col-sm-3 col-form-label">Objective</label>
                          <div class="col-sm-9">
                            <textarea v-model="project_objective" class="form-control" id="adp-objective" rows="3"></textarea>
                          </div>
                        </div>

                        <div class="mb-3 row mt-3">
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="implemtation-status" class="col-sm-4 col-form-label"><small>Project Status</small></label>
                              <div class="col-sm-8">
                                <select v-model="activity_status" id="implemtation-status" class="form-select">
                                  <option value="1">Planning</option>
                                  <option value="2">Implementation</option>
                                  <option value="3">Finalisation</option>
                                  <option value="4">Closed</option>
                                  <option value="5">Cancelled</option>
                                  <option value="6">Suspended</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="start-date" class="col-sm-5 col-form-label"> <small> Planned Start Date*</small></label>
                              <div class="col-sm-7">
                                <input type="date" v-model="project_planned_start_date" class="form-control" id="start-date">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="end-date" class="col-sm-6 col-form-label"> <small>Planned Completion Date*</small></label>
                              <div class="col-sm-6">
                                <input type="date" v-model="project_planned_end_date" class="form-control" id="end-date">
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
                                <input type="date" v-model="project_actual_start_date" class="form-control" id="actual-start-date">
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="row">
                              <label for="revised-completion-date" class="col-sm-6 col-form-label"> <small>Actual Completion Date*</small></label>
                              <div class="col-sm-6">
                                <input type="date" v-model="project_actual_end_date" class="form-control" id=" completiondate">
                              </div>
                            </div>
                          </div>
                        </div>

                        

                        <div class="mb-3 row mt-3">
                          
                          <div class="accordion" id="participating_organisations_accordion">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="participating_organisations_list">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#participating_organisations_collapse" aria-expanded="true" aria-controls="participating_organisations_collapse">
                                Participating Organisations
                              </button>
                            </h2>
                            <div id="participating_organisations_collapse" class="accordion-collapse collapse show" aria-labelledby="geographic_allocation_list" data-bs-parent="#participating_organisations_accordion">
                              <div class="accordion-body">
                                <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#participating_organisations_"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="participating_organisations_" tabindex="-1" aria-labelledby="participating_organisations_Label" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="participating_organisations_Label">Add Participating Organisation Information</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                          <label for="executing-agency-type" class="col-sm-4 col-form-label"><small>Type</small></label>
                                          <div class="col-sm-8">
                                            <select v-model="form_participating_org.type" id="executing-agency-type" class="form-select">
                                              <option v-for="orgType in organisation_types" :key="orgType.code" :value="orgType.code">{{orgType.name}}</option>
                                              
                                            </select>
                                          </div>
                                        </div>
                                        <div class="row mx-3 mt-3">
                                          <label for="organization-type" class="col-sm-4 col-form-label"><small>Role</small></label>
                                          <div class="col-sm-8">
                                            <select v-model="form_participating_org.role" id="organization-type" class="form-select">
                                              <option value="1">Funding</option>
                                              <option value="4">Implementing</option>
                                              <option value="3">Extending</option>
                                              <option value="2">Accountable</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="row mx-3 mt-3">
                                          <label for="executing-agency-type" class="col-sm-4 col-form-label"><small>Organisation</small></label>
                                          <div class="col-sm-8">
                                            <select v-model="form_participating_org.organisation_id" id="executing-agency-type" class="form-select">
                                              <option v-for="org in organisations" :key="org.id" :value="org.id">{{org.name}}</option>
                                            </select>
                                          </div>
                                        </div>
                                        
                                      </div>
                                      <div class="modal-footer">
                                        <button id="close-participating-org-modal" type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button @click="addParticipatingOrg" type="button" class="btn btn-primary">Save</button>
                                      </div>
                                    </div>
                                  </div>
                                </div> <!-- modal -->


                                <table class="table table-bordered table-responsive mt-2">
                                  <thead>
                                    <tr >
                                      <th scope="col">Organisation Name</th>
                                      <th scope="col">Organisation Type</th>
                                      <th scope="col">Organisation Role</th>
                                      <th scope="col">Actions</th>

                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="org in participating_organisations" :key="org.id">
                                      <td>{{organisations.find(element => element.id === org.organisation_id)?.name}}</td>
                                      <td>{{organisation_types.find(element => element.code === org.type)?.name}}</td>
                                      <td>{{org.role}}</td>
                                      <td><button @click="removeParticipatingOrg(org.organisation_id)" class="btn-xs btn btn-danger">x</button></td>
                                    </tr>
                                    
                                    
                                  </tbody>
                                </table>
                                
                                
                              </div>
                            </div>
                          </div>

                        </div> <!-- Participatig organisations List -->
                        </div> <!-- Main row -->



                      </div><!-- Project Basic Info -->

                      <div class="tab-pane fade" id="nav-funding" role="tabpanel" aria-labelledby="nav-funding-tab">

                        

                        <div class="accordion" id="fundingInfoCollapse">

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="budgets-header">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#budgets" aria-expanded="false" aria-controls="CommitmentInformation">
                                Budgets
                              </button>
                            </h2>
                            <div id="budgets" class="accordion-collapse collapse show" aria-labelledby="budets-header" data-bs-parent="fundingInfoCollapse">
                              <div class="accordion-body">
                                
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-budget"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="add-budget" tabindex="-1" aria-labelledby="add-budget-label" aria-hidden="true">
                                  <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="add-budget-label">Add/Edit Budget</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                        <div class="row mx-3 mt-3">
                                            <label for="status" class="col-sm-4 col-form-label"><small>Budget Status and type </small></label>
                                            
                                            <div class="col-sm-8">
                                              <div class="row">
                                                <div class="col-sm-6">
                                                  <label>Status (indicative or commited)</label>
                                                    <select v-model="form_budget.status" class="form-control">
                                                      <option value="1">Indicative</option>
                                                      <option value="2">Committed</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-6">
                                                  <label>Type (original or revised)</label>
                                                    <select v-model="form_budget.type" class="form-control">
                                                      <option value="1">Original</option>
                                                      <option value="2">Revised</option>
                                                    </select>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                            
                                        <div class="row mx-3 mt-3">
                                          <label for="aid_category" class="col-sm-4 col-form-label"><small>Budget Period</small></label>
                                          <div class="col-sm-8">
                                            <div class="row">
                                              <div class="col-sm-6">
                                                <label>Start date</label>
                                                <input v-model="form_budget.period_start" class="form-control" type="date">
                                              </div>
                                              <div class="col-sm-6">
                                                <label>End date</label>
                                                <input v-model="form_budget.period_end" class="form-control" type="date">
                                              </div>
                                            </div>  
                                      
                                          </div>
                                        </div>

                                        <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="commitment_amount" class="col-sm-5 col-form-label"><small>Budget Amount</small></label>
                                              <div class="col-sm-6">
                                                <input type="number" class="form-control" min="1" v-model="form_budget.value_amount" placeholder="1000000" id="commitment_amount">
                                              </div>
                                            </div>
                                          </div>
                                          <div class="col-sm-6">
                                            <div class="row">
                                              <label for="commitment_currency" class="col-sm-4 col-form-label"><small>Currency</small></label>
                                              <div class="col-sm-6">
                                                <select v-model="form_budget.value_currency" id="commitment_currency" class="form-select">
                                                  <option value="USD">US Dollar</option>
                                                  <option value="SSP">South Sudanese Pound</option>
                                                  <option value="EUR">Euro</option>
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
                                                <small>Amount in SSP </small>
                                              </label>
                                              <div class="col-sm-6">
                                                <input class="form-control" type="text" id="amount_in_usd">
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button id="close-add-budget-modal" type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                        <button @click="addBudget()" type="button" class="btn btn-primary">Add</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <table class="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Period start</th>
                                      <th>Period end</th>
                                      <th>Type</th>
                                      <th>Currency</th>
                                      <th>Amount</th>
                                      <th>Date of value</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="(budget,index) in budgets" :key="index">
                                      <td>{{budget.period_start}}</td>
                                      <td>{{budget.period_end}}</td>
                                      <td>{{budget.type}}</td>
                                      <td>{{budget.value_currency}}</td>
                                      <td>{{budget.value_amount}}</td>
                                      <td>{{budget.value_date}}</td>
                                      <td><button @click="removeBudget(index)" class="btn-sm btn-danger">X</button></td>
                                    </tr>
                                    
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>Total</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>{{budgets
                                        .map(obj => obj.value_amount)
                                        .reduce((accumulator, current) => accumulator + current, 0)}}
                                        </td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                    </tr>
                                    
                                  </tbody>
                                  
                                </table>
                              </div>

                            </div> 
                          </div> <!-- Commitment Information -->

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="CommitmentInformation-HeadOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CommitmentInformation" aria-expanded="false" aria-controls="CommitmentInformation">
                                Commitment Information
                              </button>
                            </h2>
                            <div id="CommitmentInformation" class="accordion-collapse collapse" aria-labelledby="CommitmentInformation-HeadOne" data-bs-parent="fundingInfoCollapse">
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
                          </div> <!-- Commitment Information -->

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="plannedDisbursementInformation-HeadOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#plannedDisbursementInformation" aria-expanded="true" aria-controls="plannedDisbursementInformation">
                                Planned Disbursement Information
                              </button>
                            </h2>
                            <div id="plannedDisbursementInformation" class="accordion-collapse collapse" aria-labelledby="plannedDisbursementInformation-HeadOne" data-bs-parent="fundingInfoCollapse">
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
                          </div> <!-- Planned Disbursement Information -->


                          <div class="accordion-item">
                            <h2 class="accordion-header" id="expenditureofAidInformation-HeadOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#expenditureofAidInformation" aria-expanded="false" aria-controls="expenditureofAidInformation">
                                Expenditure on Aid Information
                              </button>
                            </h2>
                            <div id="expenditureofAidInformation" class="accordion-collapse collapse" aria-labelledby="expenditureofAidInformation-HeadOne" data-bs-parent="fundingInfoCollapse">
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
                          </div><!-- Actual Disbursement -->


                        </div> <!-- Funding Info Collapse -->


                        <div class="accordion mt-4" id="expenditureofAidInformation">
                          
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
                            <div id="sectorsCollapse" class="accordion-collapse collapse show" aria-labelledby="sectorsHeading" data-bs-parent="#sectorContributionCollapse">
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
                                          <label for="sector" class="col-sm-4 col-form-label"><small>Vocabulary</small></label>
                                          <div class="col-sm-8">
                                            <select name="sector" id="sector" class="form-control">
                                              <option value="Public Administration">Public Administration</option>
                                              <option value="Public Health">Public Health</option>
                                            </select>
                                          </div>
                                        </div>

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
                                          <label for="sub_sector" class="col-sm-4 col-form-label"><small>Narrative (optional)</small></label>
                                          <div class="col-sm-8">
                                            <textarea class="form-control"></textarea>
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
                                      <th>Vocabulary(Sector Category)</th>
                                      <th>Sector Name</th>
                                      <th>Percentage of Allocation(%)</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>NDA</td>
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
                                    
                                  </tbody>
                                  
                                </table>
                              </div>
                            </div> <!-- sectorsCollapse -->

                            

                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="thematicHeading">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#thematicArea" aria-expanded="false" aria-controls="thematicArea">
                                Custom Sectors
                              </button>
                            </h2>
                            <div id="thematicArea" class="accordion-collapse collapse" aria-labelledby="thematicHeading" data-bs-parent="#sectorContributionCollapse">
                              <div class="accordion-body">
                                <table class="table-bordered table-stripped table-responsive table">
                                  <thead>
                                    <tr>
                                      <th>Sector</th>
                                      <th>Percentage of Allocation(%)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Income and Poverty</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Human Resource</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Water and Sanitation</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Gender Equality</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Environmental Sustainability</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Information Communication Technology(ICT)</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Urban Development</td>
                                      <td><input placeholder="100"></td>
                                    </tr>
                                    <tr>
                                      <td>Governance</td>
                                      <td><input placeholder="100"></td>
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


                      <div class="tab-pane fade" id="nav-attachments" role="tabpanel" aria-labelledby="nav-attachments-tab">

                        <h5 class="mt-3"> Notes & Attachments</h5>

                        <div class="row">
                            <label for="notes" class="col-sm-2 col-form-label"><small>Notes</small></label>
                            <div class="col-sm-8">
                              <textarea class="form-control" rows="5" name="notes"></textarea>
                            </div>
                        </div>
                        
                        <h5 class="mt-3">Attachments and References</h5>
                        <hr />

                        <div class="accordion" id="attachmentAccordion">

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="attachmentCollapseHeadingOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#attachmentCollapse" aria-expanded="false" aria-controls="attachmentCollapse">
                                Attachment and relationship info
                              </button>
                            </h2>
                            <div id="attachmentCollapse" class="accordion-collapse collapse show" aria-labelledby="attachmentCollapseHeadingOne" data-bs-parent="#attachmentAccordion">
                              <div class="accordion-body">

                                <button type="button" class="btn btn-primary mt-3 mb-2" data-bs-toggle="modal" data-bs-target="#AttachmentModal"> + Add  </button>

                                <!-- Modal -->
                                <div class="modal fade" id="AttachmentModal" tabindex="-1" aria-labelledby="AttachmentModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h5 class="modal-title" id="AttachmentModalLabel">Add / Edit Attachments</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">

                                        <div class="row mt-2">
                                          <label for="title" class="col-sm-4 col-form-label"><small>Title</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="title">
                                          </div>
                                        </div>

                                        <div class="row mt-2">
                                          <label for="document_number" class="col-sm-4 col-form-label"><small>Document Number</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="document_number">
                                          </div>
                                        </div>

                                        <div class="row mt-2">
                                          <label for="document_type" class="col-sm-4 col-form-label"><small>Document Type</small></label>
                                          <div class="col-sm-8">
                                            <select class="form-control" name="document_type">
                                              <option value="Work info">Work Info</option>
                                              <option value="word">Word Document</option>
                                            </select>
                                          </div>
                                        </div>

                                        <div class="row mt-2">
                                          <label for="reference_url" class="col-sm-4 col-form-label"><small>Reference URL</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="reference_url">
                                          </div>
                                        </div>

                                        <div class="row mt-2">
                                          <label for="filename" class="col-sm-4 col-form-label"><small>File Name</small></label>
                                          <div class="col-sm-8">
                                            <input type="text" class="form-control" name="filename">
                                          </div>
                                        </div>

                                        <div class="row mt-2">
                                          <label for="filepath" class="col-sm-4 col-form-label"><small>File Path</small></label>
                                          <div class="col-sm-8">
                                            <input type="file" class="form-control" name="filepath">
                                          </div>
                                        </div>

                                      </div>
                                      <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                      </div>
                                    </div>
                                  </div>
                                </div><!-- Analytical Works Inner Modal -->

                                <table class="table table-bordered table-responsive">
                                  <thead>
                                    <tr>
                                      <th>Title of Attachment</th>
                                      <th>Document Category</th>
                                      <th>Reference URL</th>
                                      <th>File</th>
                                      <th>Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>edit and delete icons</td>
                                    </tr>
                                    <tr class="text-muted">
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
                                      <td>&nbsp;</td>
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
                       

                      </div> <!-- Notes & Attachments -->
                    <!-- </form> -->
                  </div>
                  <button @click="saveProject()" class="btn btn-primary">Save</button>
                </div>
                
            </div>
        </div>
     </div>
       
    </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import flashError from '../components/flashError.vue'

export default {

  name: 'new-project',
  components: {
    flashError
  },

  data() {
    return {
      showAlert: false,
      alertMessage: "",
      valid: false,
      isLoading: false,
      apiErrors: false,
      generalError: false,
      validationErrors: false,
      apiLoading: true,
      sectors: [],
      recipient_regions: [],
      budgets: [],
      participating_organisations: [],
      project_title : null,
      project_objective: null,
      project_planned_start_date: null,
      project_planned_end_date: null,
      project_actual_start_date: null,
      project_actual_end_date: null,
      activity_scope: 4,
      organisation_id: 1,
      activity_status: 1,
      status: "active",
      form_participating_org: {
        type: null,
        organisation_id: null,
        role: null
      },

      form_budget: {
        type: 1,
        status: 1,
        period_start: null,
        period_end: null,
        value_currency: 'USD',
        value_amount: 0,
        value_date: null
      },

      organisation_types: [
        {
          code: 10,
          name: 'Government'
        },
        {
          code: 11,
          name: 'Local Government'
        },
        {
          code: 15,
          name: 'International NGO'
        },
        {
          code: 22,
          name: 'National NGO'
        },
        {
          code: 23,
          name: 'Regional NGO'
        },
        {
          code: 24,
          name: 'Partner Country based NGO'
        },
        {
          code: 30,
          name: 'Public Private Partnership'
        },
        {
          code: 40,
          name: 'Multilateral'
        },
        {
          code: 60,
          name: 'Foundation'
        },
        {
          code: 70,
          name: 'Private Sector'
        },
        {
          code: 71,
          name: 'Private Sector in Provider Country'
        },
        {
          code: 72,
          name: 'Private Sector in Aid Recipient Country'
        },
        {
          code: 73,
          name: 'Private Sector in Third Country'
        },
        {
          code: 80,
          name: 'Academic, Training and Research'
        },
        {
          code: 90,
          name: 'Other'
        },
      ]
    }

  },
  computed: {
    ...mapState('project', ['project']),
    ...mapState('global', ['organisations'])

  },
  methods: {

    ...mapActions({
      createProject : 'project/addProject',
      otp: 'auth/sendOtp'
    }),

    addParticipatingOrg() {
      if (this.form_participating_org.type != null &&
          this.form_participating_org.organisation_id !=null &&
          this.form_participating_org.role != null){
            
            const orgAlreadyadded = this.participating_organisations.findIndex(org => org.organisation_id === this.form_participating_org.organisation_id);
          if (orgAlreadyadded == -1){
            console.log("hoooray")
            let participatingOrg = {
              organisation_id: this.form_participating_org.organisation_id,
              type: this.form_participating_org.type,
              role: this.form_participating_org.role
            }
            this.participating_organisations.push(participatingOrg)
            this.form_participating_org.type = null
            this.form_participating_org.role = null
            this.form_participating_org.organisation_id = null
            document.getElementById("close-participating-org-modal").click();
          }
        }
    },
    removeParticipatingOrg(id) {
      const index = this.participating_organisations.findIndex(org => org.organisation_id === id);
      if (index !== -1) this.participating_organisations.splice(index, 1); 
    },

    addBudget() {
      if (this.form_budget.value_amount !=0 &&
          this.form_budget.period_start !=null &&
          this.form_budget.period_end !=null){
            
            let budget = {
              type: this.form_budget.type,
              status: this.form_budget.status,
              period_start: this.form_budget.period_start,
              period_end: this.form_budget.period_end,
              value_currency: this.form_budget.value_currency,
              value_date: this.form_budget.value_date,
              value_amount: this.form_budget.value_amount
            }
            this.budgets.push(budget)
            this.form_budget.type = 1
            this.form_budget.status = 1
            this.form_budget.value_amount = 0
            this.form_budget.period_start = null,
            this.form_budget.period_end = null,
            document.getElementById("close-add-budget-modal").click();
          
        }
    },
    removeBudget(index) {      
      if (this.budgets[index] !== undefined) this.budgets.splice(index, 1); 
    },
    saveProject() {
       this.apiErrors = false;
       this.generalError = false;
       this.isLoading = true;
       this.validationErrors = false;
       let payload = {
        sectors: this.sectors,
        recipient_regions: this.recipient_regions,
        budgets: this.budgets,
        participating_organisations: this.participating_organisations,
        project_title : this.project_title,
        project_objective: this.project_objective,
        project_planned_start_date: this.project_planned_start_date,
        project_planned_end_date: this.project_planned_end_date,
        project_actual_start_date: this.project_actual_start_date,
        project_actual_end_date: this.project_actual_end_date,
        activity_scope: this.activity_scope,
        organisation_id: this.organisation_id,
        activity_status: this.activity_status,
        status: this.status,
       }
       this.createProject(payload).then(
          (response) => {
            //
            this.isLoading = false;
            let savedProject = response.data.data 
            this.$store.commit('project/ADD_PROJECT', savedProject)
            this.$store.commit('showSnackbar', 'success');
            this.$router.push({ name: "projects" });
          },
          (error) => {
            const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.errors) ||
                    error.message ||
                    error.toString();
             this.isLoading = false;
             this.apiErrors = true;
             this.generalError = true;
             this.errors = resMessage;
             

          }
        );
       
        
          
        
    },
  },

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