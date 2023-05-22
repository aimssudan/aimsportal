<template>
  <main class="page p-page" style="min-height: 80vh">
    <div class="container">
      <h1 class="text-primary">View Project</h1>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'dashboard' }"> Dashboard</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link :to="{ name: 'projects' }"> Projects</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            View Project
          </li>
        </ol>
      </nav>
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5>{{ componentAction }}</h5>
          </div>
          <div class="card-body">
            <div
              v-if="isLoading"
              class="spinner-border text-warning"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
            <flash-error
              :hasError="apiErrors"
              :errors="errors"
              @dismissError="apiErrors = false"
            ></flash-error>
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-basic-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-basic"
                  type="button"
                  role="tab"
                  aria-controls="nav-basic"
                  aria-selected="true"
                >
                  Project Basic Info
                </button>
                <button
                  class="nav-link"
                  id="nav-funding-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-funding"
                  type="button"
                  role="tab"
                  aria-controls="nav-funding"
                  aria-selected="false"
                >
                  Financials
                </button>
                <button
                  class="nav-link"
                  id="nav-sector-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-sector"
                  type="button"
                  role="tab"
                  aria-controls="nav-sector"
                  aria-selected="false"
                >
                  Sector Contribution
                </button>
                <button
                  class="nav-link"
                  id="nav-geographic-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-geographic"
                  type="button"
                  role="tab"
                  aria-controls="nav-geographic"
                  aria-selected="false"
                >
                  Geographic Contribution
                </button>
                <button
                  class="nav-link"
                  id="nav-attachments-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-attachments"
                  type="button"
                  role="tab"
                  aria-controls="nav-attachments"
                  aria-selected="false"
                >
                  Additional Information
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <!-- <form action="" method="post"> -->
              <div
                class="tab-pane fade show active"
                id="nav-basic"
                role="tabpanel"
                aria-labelledby="nav-basic-tab"
              >
                <div class="mb-3 row mt-3">
                  <label for="managing-dp" class="col-sm-3 col-form-label"
                    >Project Title *</label
                  >
                  <div class="col-sm-9">
                    <textarea
                      v-model="project_title"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div class="mb-3 row mt-3 bg-light pt-3 pb-3">
                  <label for="adp-objective" class="col-sm-3 col-form-label"
                    >Objective</label
                  >
                  <div class="col-sm-9">
                    <textarea
                      v-model="project_objective"
                      class="form-control"
                      id="adp-objective"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div class="mb-3 row mt-3">
                  <div class="col-sm-4">
                    <div class="row">
                      <label
                        for="implemtation-status"
                        class="col-sm-4 col-form-label"
                        ><small>Project Status</small></label
                      >
                      <div class="col-sm-8">
                        <select
                          v-model="activity_status"
                          id="implemtation-status"
                          class="form-select"
                        >
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
                      <label for="start-date" class="col-sm-5 col-form-label">
                        <small> Planned Start Date*</small></label
                      >
                      <div class="col-sm-7">
                        <input
                          type="date"
                          v-model="project_planned_start_date"
                          class="form-control"
                          id="start-date"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="row">
                      <label for="end-date" class="col-sm-6 col-form-label">
                        <small>Planned Completion Date*</small></label
                      >
                      <div class="col-sm-6">
                        <input
                          type="date"
                          v-model="project_planned_end_date"
                          class="form-control"
                          id="end-date"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3 row mt-3">
                  <div class="col-sm-4">
                    <div class="row">
                      <label
                        for="revision-status"
                        class="col-sm-4 col-form-label"
                        ><small>Revision Status</small></label
                      >
                      <div class="col-sm-8">
                        <select
                          name="revision-status"
                          id="revision-status"
                          class="form-select"
                        >
                          <option value="On-going">On-going</option>
                          <option value="On-pause">On-pause</option>
                          <option value="Complete">Complete</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="row">
                      <label
                        for="actual-start-date"
                        class="col-sm-5 col-form-label"
                      >
                        <small> Actual Start Date*</small></label
                      >
                      <div class="col-sm-7">
                        <input
                          type="date"
                          v-model="project_actual_start_date"
                          class="form-control"
                          id="actual-start-date"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="row">
                      <label
                        for="revised-completion-date"
                        class="col-sm-6 col-form-label"
                      >
                        <small>Actual Completion Date*</small></label
                      >
                      <div class="col-sm-6">
                        <input
                          type="date"
                          v-model="project_actual_end_date"
                          class="form-control"
                          id=" completiondate"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3 row mt-3">
                  <div class="col-sm-8">
                    <div class="row">
                      <label
                        for="revision-status"
                        class="col-sm-4 col-form-label"
                        ><small>Humanitarian / Development</small></label
                      >
                      <div class="col-sm-8">
                        <div class="form-check form-switch">
                          <input class="form-check-input" v-model="humanitarian" type="checkbox" id="flexSwitchCheckDefault">
                          <label class="form-check-label" for="flexSwitchCheckDefault">{{ (humanitarian)? 'Humanitarian' : 'Development'}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-3 row mt-3">
                  <div
                    class="accordion"
                    id="participating_organisations_accordion"
                  >
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="participating_organisations_list"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#participating_organisations_collapse"
                          aria-expanded="true"
                          aria-controls="participating_organisations_collapse"
                        >
                          Participating Organisations
                        </button>
                      </h2>
                      <div
                        id="participating_organisations_collapse"
                        class="accordion-collapse collapse show"
                        aria-labelledby="geographic_allocation_list"
                        data-bs-parent="#participating_organisations_accordion"
                      >
                        <div class="accordion-body">
                          <button
                            v-if="isEditor"
                            type="button"
                            class="btn btn-primary mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#participating_organisations_"
                          >
                            + Add
                          </button>

                          <!-- Modal -->
                          <div
                            class="modal fade"
                            id="participating_organisations_"
                            tabindex="-1"
                            aria-labelledby="participating_organisations_Label"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modal-xl modal-dialog-scrollable"
                            >
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="participating_organisations_Label"
                                  >
                                    Add Participating Organisation Information
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <div class="row mx-3 mt-3">
                                    <label
                                      for="executing-agency-type"
                                      class="col-sm-4 col-form-label"
                                      ><small>Type</small></label
                                    >
                                    <div class="col-sm-8">
                                      <select
                                        v-model="form_participating_org.type"
                                        id="executing-agency-type"
                                        class="form-select"
                                      >
                                        <option
                                          v-for="orgType in organisation_types"
                                          :key="orgType.code"
                                          :value="orgType.code"
                                        >
                                          {{ orgType.name }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row mx-3 mt-3">
                                    <label
                                      for="organization-type"
                                      class="col-sm-4 col-form-label"
                                      ><small>Role</small></label
                                    >
                                    <div class="col-sm-8">
                                      <select
                                        v-model="form_participating_org.role"
                                        id="organization-type"
                                        class="form-select"
                                      >
                                        <option value="1">Funding</option>
                                        <option value="4">Implementing</option>
                                        <option value="3">Extending</option>
                                        <option value="2">Accountable</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row mx-3 mt-3">
                                    <label
                                      for="executing-agency-type"
                                      class="col-sm-4 col-form-label"
                                      ><small>Organisation</small></label
                                    >
                                    <div class="col-sm-8">
                                      <select
                                        v-model="
                                          form_participating_org.organisation_id
                                        "
                                        id="executing-agency-type"
                                        class="form-select"
                                      >
                                        <option
                                          v-for="org in organisations"
                                          :key="org.id"
                                          :value="org.id"
                                        >
                                          {{ org.name }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    id="close-participating-org-modal"
                                    type="button"
                                    class="btn btn-danger"
                                    data-bs-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    @click="addParticipatingOrg"
                                    type="button"
                                    class="btn btn-primary"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- modal -->

                          <table
                            class="table table-bordered table-responsive mt-2"
                          >
                            <thead>
                              <tr>
                                <th scope="col">Organisation Name</th>
                                <th scope="col">Organisation Type</th>
                                <th scope="col">Organisation Role</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(
                                  org, index
                                ) in participating_organisations"
                                :key="index"
                              >
                                <td>
                                  {{
                                    organisations.find(
                                      (element) =>
                                        element.id === org.organisation_id
                                    )?.name
                                  }}
                                </td>
                                <td>
                                  {{
                                    organisation_types.find(
                                      (element) => element.code === org.type
                                    )?.name
                                  }}
                                </td>
                                <td>
                                  {{
                                    organisation_roles.find(
                                      (element) => element.code === org.role
                                    )?.name
                                  }}
                                </td>
                                <td>
                                  <button
                                    v-if="isEditor"
                                    @click="removeParticipatingOrg(index)"
                                    class="btn-xs btn btn-danger"
                                  >
                                    x
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Participatig organisations List -->
                </div>
                <!-- Main row -->
              </div>
              <!-- Project Basic Info -->

              <div
                class="tab-pane fade"
                id="nav-funding"
                role="tabpanel"
                aria-labelledby="nav-funding-tab"
              >
                <div class="accordion" id="fundingInfoCollapse">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="budgets-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#budgets"
                        aria-expanded="false"
                        aria-controls="CommitmentInformation"
                      >
                        Budgets
                      </button>
                    </h2>
                    <div
                      id="budgets"
                      class="accordion-collapse collapse show"
                      aria-labelledby="budets-header"
                      data-bs-parent="fundingInfoCollapse"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#add-budget"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="add-budget"
                          tabindex="-1"
                          aria-labelledby="add-budget-label"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-xl modal-dialog-scrollable"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="add-budget-label">
                                  Add/Edit Budget
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="status"
                                    class="col-sm-4 col-form-label"
                                    ><small
                                      >Budget Status and type
                                    </small></label
                                  >

                                  <div class="col-sm-8">
                                    <div class="row">
                                      <div class="col-sm-6">
                                        <label
                                          >Status (indicative or
                                          commited)</label
                                        >
                                        <select
                                          v-model="form_budget.status"
                                          class="form-control"
                                        >
                                          <option
                                            v-for="status in budget_statuses"
                                            :key="status.code"
                                            :value="status.code"
                                          >
                                            {{ status.name }}
                                          </option>
                                        </select>
                                      </div>
                                      <div class="col-sm-6">
                                        <label
                                          >Type (original or revised)</label
                                        >
                                        <select
                                          v-model="form_budget.type"
                                          class="form-control"
                                        >
                                          <option
                                            v-for="type in budget_types"
                                            :key="type.code"
                                            :value="type.code"
                                          >
                                            {{ type.name }}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="aid_category"
                                    class="col-sm-4 col-form-label"
                                    ><small>Budget Period</small></label
                                  >
                                  <div class="col-sm-8">
                                    <div class="row">
                                      <div class="col-sm-6">
                                        <label>Start date</label>
                                        <input
                                          v-model="form_budget.period_start"
                                          class="form-control"
                                          type="date"
                                        />
                                      </div>
                                      <div class="col-sm-6">
                                        <label>End date</label>
                                        <input
                                          v-model="form_budget.period_end"
                                          class="form-control"
                                          type="date"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        for="commitment_amount"
                                        class="col-sm-5 col-form-label"
                                        ><small>Budget Amount</small></label
                                      >
                                      <div class="col-sm-6">
                                        <input
                                          type="number"
                                          class="form-control"
                                          min="1"
                                          v-model="form_budget.value_amount"
                                          placeholder="1000000"
                                          id="commitment_amount"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        for="commitment_currency"
                                        class="col-sm-4 col-form-label"
                                        ><small>Currency</small></label
                                      >
                                      <div class="col-sm-6">
                                        <select
                                          v-model="form_budget.value_currency"
                                          id="commitment_currency"
                                          class="form-select"
                                        >
                                          <option
                                            v-for="currency in currencies"
                                            :key="currency.code"
                                            :value="currency.code"
                                          >
                                            {{ currency.name }}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-6"
                                        for="commitment_exchange_rate"
                                      >
                                        <small
                                          >Exchange Rate To USD <br />
                                          <span class="text-success"
                                            >(1 USD = ? DP Cuurrency)</span
                                          >
                                        </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="text"
                                          :value="exchange_rate_usd"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-4"
                                        for="amount_in_usd"
                                      >
                                        <small>Amount in USD </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="number"
                                          min="0"
                                          :value="BudgetValueAmountUSD"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-6"
                                        for="commitment_exchange_rate_to_sp"
                                      >
                                        <small
                                          >Exchange Rate To SSP <br />
                                          <span class="text-success"
                                            >(1 USD = ? SSP Currency)</span
                                          >
                                        </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="text"
                                          :value="exchange_rate_ssp"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-4"
                                        for="amount_in_usd"
                                      >
                                        <small>Amount in SSP </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="number"
                                          min="0"
                                          :value="BudgetValueAmountSSP"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  id="close-add-budget-modal"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  v-if="isEditor"
                                  @click="addBudget()"
                                  type="button"
                                  class="btn btn-primary"
                                >
                                  Add
                                </button>
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
                            <tr v-for="(budget, index) in budgets" :key="index">
                              <td>{{ budget.period_start }}</td>
                              <td>{{ budget.period_end }}</td>
                              <td>{{ budget.type }}</td>
                              <td>{{ budget.value_currency }}</td>
                              <td>{{ budget.value_amount }}</td>
                              <td>{{ budget.value_date }}</td>
                              <td>
                                <button
                                  v-if="isEditor"
                                  @click="removeBudget(index)"
                                  class="btn btn-sm btn-danger"
                                >
                                  X
                                </button>
                              </td>
                            </tr>

                            <tr>
                              <td>&nbsp;</td>
                              <td>Total</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>
                                {{
                                  budgets
                                    .map((obj) => obj.value_amount)
                                    .reduce(
                                      (accumulator, current) =>
                                        accumulator + current,
                                      0
                                    )
                                }}
                              </td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <!-- Commitment Information -->

                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="CommitmentInformation-HeadOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CommitmentInformation"
                        aria-expanded="false"
                        aria-controls="CommitmentInformation"
                      >
                        Funding Information
                      </button>
                    </h2>
                    <div
                      id="CommitmentInformation"
                      class="accordion-collapse collapse"
                      aria-labelledby="CommitmentInformation-HeadOne"
                      data-bs-parent="fundingInfoCollapse"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#addCommitmentInformation"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="addCommitmentInformation"
                          
                          aria-labelledby="addCommitmentInformationLabel"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-xl modal-dialog-scrollable"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="addCommitmentInformationLabel"
                                >
                                  Add Incoming Funds
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="development_partner"
                                    class="col-sm-4 col-form-label"
                                    ><small>Funding Organisation</small></label
                                  >
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.provider_org
                                          .organisation_id
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="org in organisations"
                                        :key="org.id"
                                        :value="org.id"
                                      >
                                        {{ org.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.provider_org.type
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="orgType in organisation_types"
                                        :key="orgType.code"
                                        :value="orgType.code"
                                      >
                                        {{ orgType.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="development_partner"
                                    class="col-sm-4 col-form-label"
                                    ><small
                                      >Receiving Organisation</small
                                    ></label
                                  >
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.receiver_org
                                          .organisation_id
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="org in organisations"
                                        :key="org.id"
                                        :value="org.id"
                                      >
                                        {{ org.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.receiver_org.type
                                      "
                                      class="form-select"
                                    >
                                      <option>Organisation Type</option>
                                      <option
                                        v-for="orgType in organisation_types"
                                        :key="orgType.code"
                                        :value="orgType.code"
                                      >
                                        {{ orgType.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="development_partner"
                                    class="col-sm-4 col-form-label"
                                    ><small>Aid Category</small></label
                                  >
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.aid_types[0]
                                          .vocabulary
                                      "
                                      @change="updateAidTypes"
                                      class="form-select"
                                    >
                                      <option
                                        v-for="voc in aid_type_vocabularies"
                                        :key="voc.code"
                                        :value="voc.code"
                                      >
                                        {{ voc.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.aid_types[0].code
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="code in aid_type_codes"
                                        :key="code.code"
                                        :value="code.code"
                                      >
                                        {{ code.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="aid_category"
                                    class="col-sm-4 col-form-label"
                                    ><small>Transaction Dates</small></label
                                  >
                                  <div class="col-sm-8">
                                    <div class="row">
                                      <div class="col-sm-12">
                                        <div class="row">
                                          <div class="col-sm-6">
                                            <label class=""
                                              >Transaction Date</label
                                            >
                                            <input
                                              class="form-control"
                                              type="date"
                                              v-model="
                                                form_transactions.transaction_date
                                              "
                                            />
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Value Date</label>
                                            <input
                                              class="form-control"
                                              type="date"
                                              v-model="
                                                form_transactions.value_date
                                              "
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="aid_category"
                                    class="col-sm-4 col-form-label"
                                    ><small>Disbursment</small></label
                                  >
                                  <div class="col-sm-8">
                                    <div class="row">
                                      <div class="col-sm-12">
                                        <div class="row">
                                          <div class="col-sm-6">
                                            <label class=""
                                              >Disbursement Channel</label
                                            >
                                            <select
                                              v-model="
                                                form_transactions.disbursement_channel_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in disbursement_channels"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Flow Type</label>
                                            <select
                                              v-model="
                                                form_transactions.flow_type_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in flow_types"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Finance Type</label>
                                            <select
                                              v-model="
                                                form_transactions.finance_type_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in finance_types"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Tied Status</label>
                                            <select
                                              v-model="
                                                form_transactions.tied_status_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in tied_status_codes"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                  <div class="col-sm-4">
                                    <div class="row">
                                      <label
                                        for="commitment_amount"
                                        class="col-sm-5 col-form-label"
                                        ><small>Commitment Amount</small></label
                                      >
                                      <div class="col-sm-6">
                                        <input
                                          v-model="
                                            form_transactions.value_amount
                                          "
                                          @keyup="updateExchangeRates(false)"
                                          class="form-control"
                                          type="number"
                                          min="1"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4">
                                    <div class="row">
                                      <label
                                        for="commitment_currency"
                                        class="col-sm-4 col-form-label"
                                        ><small>Currency</small></label
                                      >
                                      <div class="col-sm-6">
                                        <select
                                          v-model="
                                            form_transactions.value_currency
                                          "
                                          @change="updateExchangeRates(false)"
                                          class="form-select"
                                        >
                                          <option
                                            v-for="currency in currencies"
                                            :key="currency.code"
                                            :value="currency.code"
                                          >
                                            {{ currency.name }}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4">
                                    <div class="row">
                                      <label
                                        for="commitment_currency"
                                        class="col-sm-4 col-form-label"
                                        ><small>Reference</small></label
                                      >
                                      <div class="col-sm-6">
                                        <input
                                          type="text"
                                          v-model="form_transactions.ref"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-6"
                                        for="commitment_exchange_rate"
                                      >
                                        <small
                                          >Exchange Rate To USD <br />
                                          <span class="text-success"
                                            >(1 USD = ? DP Currency)</span
                                          >
                                        </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="text"
                                          :value="exchange_rate_usd"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-4"
                                        for="amount_in_usd"
                                      >
                                        <small>Amount in USD </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="number"
                                          min="0"
                                          :value="TransactionValueAmountUSD"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-6"
                                        for="commitment_exchange_rate_to_sp"
                                      >
                                        <small
                                          >Exchange Rate To SSP <br />
                                          <span class="text-success"
                                            >(1 USD = ? SSP Cuurrency)</span
                                          >
                                        </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="text"
                                          :value="exchange_rate_ssp"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-4"
                                        for="amount_in_usd"
                                      >
                                        <small>Amount in SSP </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="number"
                                          min="0"
                                          :value="TransactionValueAmountSSP"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  id="close-add-incoming-funds-modal"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  v-if="isEditor"
                                  @click="addIncomingFunds"
                                  type="button"
                                  class="btn btn-primary"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Development Partner</th>
                                <th>Aid Category</th>
                                <th>Transaction Ref</th>
                                <th>Transaction Date</th>
                                <th>Amount in DP's Currency</th>
                                <th>Amount in USD</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="funding in incomingTransactions"
                                :key="funding.id"
                              >
                                <td>
                                  {{
                                    organisations.find(
                                      (element) =>
                                        element.id ===
                                        funding.provider_org.organisation_id
                                    )?.name
                                  }}
                                </td>
                                <td>
                                  {{
                                    aid_type_codes.find(
                                      (element) =>
                                        element.code ===
                                        funding.aid_types[0].code
                                    )?.name
                                  }}
                                </td>
                                <td>{{ funding.ref }}</td>
                                <td>{{ funding.transaction_date }}</td>
                                <td>
                                  {{
                                    Intl.NumberFormat().format(
                                      funding.value_amount
                                    )
                                  }}
                                </td>
                                <td>
                                  {{
                                    Intl.NumberFormat().format(
                                      funding.value_amount
                                    )
                                  }}
                                </td>
                                <td>
                                  <button
                                    v-if="isEditor"
                                    @click="removeTransaction(funding.id)"
                                    class="btn btn-sm btn-danger"
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>Total</td>
                                <td>&nbsp;</td>
                                <td>
                                  {{
                                    incomingTransactions
                                      .map((obj) => obj.value_amount)
                                      .reduce(
                                        (accumulator, current) =>
                                          accumulator + current,
                                        0
                                      )
                                  }}
                                </td>
                                <td>&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Commitment Information -->

                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="expenditureofAidInformation-HeadOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#expenditureofAidInformation"
                        aria-expanded="false"
                        aria-controls="expenditureofAidInformation"
                      >
                        Expenditure on Aid Information
                      </button>
                    </h2>
                    <div
                      id="expenditureofAidInformation"
                      class="accordion-collapse collapse"
                      aria-labelledby="expenditureofAidInformation-HeadOne"
                      data-bs-parent="fundingInfoCollapse"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#addexpenditureofAidInformation"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="addexpenditureofAidInformation"
                          tabindex="-1"
                          aria-labelledby="addexpenditureofAidInformationLabel"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-xl modal-dialog-scrollable"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="addexpenditureofAidInformationLabel"
                                >
                                  Add Expenditure
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="development_partner"
                                    class="col-sm-4 col-form-label"
                                    ><small>Funding Organisation</small></label
                                  >
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.provider_org
                                          .organisation_id
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="org in organisations"
                                        :key="org.id"
                                        :value="org.id"
                                      >
                                        {{ org.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.provider_org.type
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="orgType in organisation_types"
                                        :key="orgType.code"
                                        :value="orgType.code"
                                      >
                                        {{ orgType.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="development_partner"
                                    class="col-sm-4 col-form-label"
                                    ><small
                                      >Receiving Organisation</small
                                    ></label
                                  >
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.receiver_org
                                          .organisation_id
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="org in organisations"
                                        :key="org.id"
                                        :value="org.id"
                                      >
                                        {{ org.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.receiver_org.type
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="orgType in organisation_types"
                                        :key="orgType.code"
                                        :value="orgType.code"
                                      >
                                        {{ orgType.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="development_partner"
                                    class="col-sm-4 col-form-label"
                                    ><small>Aid Category</small></label
                                  >
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.aid_types[0]
                                          .vocabulary
                                      "
                                      @change="updateAidTypes"
                                      class="form-select"
                                    >
                                      <option
                                        v-for="voc in aid_type_vocabularies"
                                        :key="voc.code"
                                        :value="voc.code"
                                      >
                                        {{ voc.name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div class="col-sm-4">
                                    <select
                                      v-model="
                                        form_transactions.aid_types[0].code
                                      "
                                      class="form-select"
                                    >
                                      <option
                                        v-for="code in aid_type_codes"
                                        :key="code.code"
                                        :value="code.code"
                                      >
                                        {{ code.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="aid_category"
                                    class="col-sm-4 col-form-label"
                                    ><small>Transaction Dates</small></label
                                  >
                                  <div class="col-sm-8">
                                    <div class="row">
                                      <div class="col-sm-12">
                                        <div class="row">
                                          <div class="col-sm-6">
                                            <label class=""
                                              >Transaction Date</label
                                            >
                                            <input
                                              class="form-control"
                                              type="date"
                                              v-model="
                                                form_transactions.transaction_date
                                              "
                                            />
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Value Date</label>
                                            <input
                                              class="form-control"
                                              type="date"
                                              v-model="
                                                form_transactions.value_date
                                              "
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="aid_category"
                                    class="col-sm-4 col-form-label"
                                    ><small>Disbursment</small></label
                                  >
                                  <div class="col-sm-8">
                                    <div class="row">
                                      <div class="col-sm-12">
                                        <div class="row">
                                          <div class="col-sm-6">
                                            <label class=""
                                              >Disbursement Channel</label
                                            >
                                            <select
                                              v-model="
                                                form_transactions.disbursement_channel_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in disbursement_channels"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Flow Type</label>
                                            <select
                                              v-model="
                                                form_transactions.flow_type_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in flow_types"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Finance Type</label>
                                            <select
                                              v-model="
                                                form_transactions.finance_type_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in finance_types"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                          <div class="col-sm-6">
                                            <label class="">Tied Status</label>
                                            <select
                                              v-model="
                                                form_transactions.tied_status_code
                                              "
                                              class="form-select"
                                            >
                                              <option
                                                v-for="code in tied_status_codes"
                                                :key="code.code"
                                                :value="code.code"
                                              >
                                                {{ code.name }}
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 pt-3 pb-3 mt-3 bg-light">
                                  <div class="col-sm-4">
                                    <div class="row">
                                      <label
                                        for="commitment_amount"
                                        class="col-sm-5 col-form-label"
                                        ><small>Commitment Amount</small></label
                                      >
                                      <div class="col-sm-6">
                                        <input
                                          v-model="
                                            form_transactions.value_amount
                                          "
                                          @keyup="updateExchangeRates"
                                          class="form-control"
                                          type="number"
                                          min="1"
                                          placeholder="1000000"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4">
                                    <div class="row">
                                      <label
                                        for="commitment_currency"
                                        class="col-sm-4 col-form-label"
                                        ><small>Currency</small></label
                                      >
                                      <div class="col-sm-6">
                                        <select
                                          v-model="
                                            form_transactions.value_currency
                                          "
                                          @change="updateExchangeRates"
                                          class="form-select"
                                        >
                                          <option
                                            v-for="currency in currencies"
                                            :key="currency.code"
                                            :value="currency.code"
                                          >
                                            {{ currency.name }}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-4">
                                    <div class="row">
                                      <label
                                        for="commitment_currency"
                                        class="col-sm-4 col-form-label"
                                        ><small>Reference</small></label
                                      >
                                      <div class="col-sm-6">
                                        <input
                                          type="text"
                                          v-model="form_transactions.ref"
                                          class="form-control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-6"
                                        for="commitment_exchange_rate"
                                      >
                                        <small
                                          >Exchange Rate To USD <br />
                                          <span class="text-success"
                                            >(1 USD = ? DP Cuurrency)</span
                                          >
                                        </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="text"
                                          :value="exchange_rate_usd"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-4"
                                        for="amount_in_usd"
                                      >
                                        <small>Amount in USD </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="number"
                                          min="0"
                                          :value="TransactionValueAmountUSD"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-6"
                                        for="commitment_exchange_rate_to_sp"
                                      >
                                        <small
                                          >Exchange Rate To SSP <br />
                                          <span class="text-success"
                                            >(1 USD = ? SSP Currency)</span
                                          >
                                        </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="number"
                                          :value="exchange_rate_ssp"
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-sm-6">
                                    <div class="row">
                                      <label
                                        class="form-check-label col-sm-4"
                                        for="amount_in_usd"
                                      >
                                        <small>Amount in SSP </small>
                                      </label>
                                      <div class="col-sm-6">
                                        <input
                                          readonly
                                          class="form-control"
                                          type="text"
                                          :value="TransactionValueAmountSSP"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  id="close-add-expense-modal"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  @click="addExpense"
                                  type="button"
                                  class="btn btn-primary"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Development Partner</th>
                                <th>Aid Category</th>
                                <th>Transaction Ref</th>
                                <th>Transaction Date</th>
                                <th>Amount in DP's Currency</th>
                                <th>Amount in USD</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="funding in expenditures"
                                :key="funding.id"
                              >
                                <td>
                                  {{
                                    organisations.find(
                                      (element) =>
                                        element.id ===
                                        funding.provider_org.organisation_id
                                    )?.name
                                  }}
                                </td>
                                <td>
                                  {{
                                    aid_type_codes.find(
                                      (element) =>
                                        element.code ===
                                        funding.aid_types[0].code
                                    )?.name
                                  }}
                                </td>
                                <td>{{ funding.ref }}</td>
                                <td>{{ funding.transaction_date }}</td>
                                <td>
                                  {{
                                    Intl.NumberFormat().format(
                                      funding.value_amount
                                    )
                                  }}
                                </td>
                                <td>
                                  {{
                                    Intl.NumberFormat().format(
                                      funding.value_amount
                                    )
                                  }}
                                </td>
                                <td>
                                  <button
                                    v-if="isEditor"
                                    @click="removeTransaction(funding.id)"
                                    class="btn btn-sm btn-danger"
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>Total</td>
                                <td>&nbsp;</td>
                                <td>
                                  {{
                                    expenditures
                                      .map((obj) => obj.value_amount)
                                      .reduce(
                                        (accumulator, current) =>
                                          accumulator + current,
                                        0
                                      )
                                  }}
                                </td>
                                <td>&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Actual Disbursement -->
                </div>
                <!-- Funding Info Collapse -->

                <div
                  class="accordion mt-4"
                  id="expenditureofAidInformation"
                ></div>
              </div>
              <!-- Funding Info -->

              <div
                class="tab-pane fade"
                id="nav-sector"
                role="tabpanel"
                aria-labelledby="nav-sector-tab"
              >
                <div class="accordion" id="sectorContributionCollapse">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="sectorsHeading">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sectorsCollapse"
                        aria-expanded="true"
                        aria-controls="sectorsCollapse"
                      >
                        Sectors
                      </button>
                    </h2>
                    <div
                      id="sectorsCollapse"
                      class="accordion-collapse collapse show"
                      aria-labelledby="sectorsHeading"
                      data-bs-parent="#sectorContributionCollapse"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary mt-3"
                          data-bs-toggle="modal"
                          data-bs-target="#sectorContribution"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="sectorContribution"
                          tabindex="-1"
                          aria-labelledby="sectorContributionLabel"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-lg modal-dialog-scrollable"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="sectorContributionLabel"
                                >
                                  Add Sector Information
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Vocabulary</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="form_sector.sector_vocabulary"
                                      @change="updateSectorCodeList()"
                                      class="form-control"
                                    >
                                      <option
                                        v-for="vocabulary in sector_vocabularies"
                                        :key="vocabulary.code"
                                        :value="vocabulary.code"
                                      >
                                        {{ vocabulary.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Sector</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="form_sector.sector_code"
                                      class="form-control"
                                    >
                                      <option
                                        v-for="sector_code in sector_codes"
                                        :key="sector_code.code"
                                        :value="sector_code.code"
                                      >
                                        {{ sector_code.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sub_sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Narrative (optional)</small></label
                                  >
                                  <div class="col-sm-8">
                                    <textarea
                                      v-model="form_sector.sector_narrative"
                                      class="form-control"
                                    ></textarea>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="allocation"
                                    class="col-sm-4 col-form-label"
                                    ><small>Allocation (%)</small></label
                                  >
                                  <div class="col-sm-4">
                                    <input
                                      type="number"
                                      v-model="form_sector.sector_percentage"
                                      class="form-control"
                                      id="allocation"
                                      min="0"
                                      max="100"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  id="close-add-sector-modal"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  @click="addSectorContribution()"
                                  type="button"
                                  class="btn btn-primary"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- modal -->

                        <div class="table-responsive">
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
                              <tr
                                v-for="(sector, index) in sectors"
                                :key="index"
                              >
                                <td>{{ sector.sector_vocabulary }}</td>
                                <td>{{ sector.sector_code }}</td>
                                <td>{{ sector.sector_percentage }}</td>
                                <td>
                                  <button
                                    v-if="isEditor"
                                    @click="removeSectorContribution(index)"
                                    class="btn btn-sm btn-danger"
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                              <tr class="text-muted">
                                <td>Total</td>
                                <td>&nbsp;</td>
                                <td>
                                  {{
                                    sectors
                                      .map((obj) => obj.sector_percentage)
                                      .reduce(
                                        (accumulator, current) =>
                                          accumulator + current,
                                        0
                                      )
                                  }}
                                </td>
                                <td>&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <!-- sectorsCollapse -->
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="thematicHeading">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#thematicArea"
                        aria-expanded="false"
                        aria-controls="thematicArea"
                      >
                        Custom Sectors
                      </button>
                    </h2>
                    <div
                      id="thematicArea"
                      class="accordion-collapse collapse"
                      aria-labelledby="thematicHeading"
                      data-bs-parent="#sectorContributionCollapse"
                    >
                      <div class="accordion-body">
                        <table
                          class="table-bordered table-stripped table-responsive table"
                        >
                          <thead>
                            <tr>
                              <th>Sector</th>
                              <th>Percentage of Allocation(%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Income and Poverty</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Human Resource</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Water and Sanitation</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Gender Equality</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Environmental Sustainability</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Information Communication Technology(ICT)</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Urban Development</td>
                              <td><input placeholder="100" /></td>
                            </tr>
                            <tr>
                              <td>Governance</td>
                              <td><input placeholder="100" /></td>
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
                </div>
                <!-- sectorContributionCollapse -->
              </div>
              <!-- Sector Contribution -->

              <div
                class="tab-pane fade"
                id="nav-geographic"
                role="tabpanel"
                aria-labelledby="nav-geographic-tab"
              >
                <div class="row mx-2 mt-2 mb-2">
                  <label for="countrywide" class="form-control-label col-md-2"
                    >Country Wide?</label
                  >
                  <div class="col-md-5">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        v-model="countrywide_contribution"
                        id="yesRadioBtn"
                        value="1"
                      />
                      <label class="form-check-label" for="yesRadioBtn"
                        >Yes</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        v-model="countrywide_contribution"
                        id="noRadioBtn"
                        value="0"
                      />
                      <label class="form-check-label" for="noRadioBtn"
                        >No</label
                      >
                    </div>
                  </div>
                </div>

                <div class="accordion" id="ss_locations_accordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="ss_locations_list">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#ss_locations_collapse"
                        aria-expanded="true"
                        aria-controls="ss_locations_collapse"
                      >
                        South Sudan Locations
                      </button>
                    </h2>
                    <div
                      id="ss_locations_collapse"
                      class="accordion-collapse collapse show"
                      aria-labelledby="ss_locations_list"
                      data-bs-parent="#ss_locations_accordion"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary mt-3"
                          data-bs-toggle="modal"
                          data-bs-target="#ss_locations_"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="ss_locations_"
                          tabindex="-1"
                          aria-labelledby="ss_locations_Label"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-xl modal-dialog-scrollable"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="geographic_allocation_Label"
                                >
                                  Add South Sudan Locations
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>State</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="form_locations.state"
                                      @change="updateCounties()"
                                      class="form-control"
                                    >
                                      <option
                                        v-for="locState in locationStates"
                                        :key="locState.id"
                                        :value="locState.id"
                                      >
                                        {{ locState.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>County (Optional)</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="form_locations.county"
                                      class="form-control"
                                      @change="updatePayam($event)"
                                    >
                                      <option
                                        v-for="county in location_counties"
                                        :key="county.id"
                                        :value="county.id"
                                      >
                                        {{ county.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sub_sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Param (optional)</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="form_locations.payam"
                                      @change="updatePayamName($event)"
                                      class="form-control"
                                    >
                                      <option
                                        v-for="payam in location_payams"
                                        :key="payam.id"
                                        :value="payam.id"
                                      >
                                        {{ payam.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  id="close-add-location-modal"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  @click="addLocationToProject()"
                                  type="button"
                                  class="btn btn-primary"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- modal -->

                        <div class="table-responsive">
                          <table class="table table-responsive">
                            <thead>
                              <tr>
                                <th>State</th>
                                <th>County</th>
                                <th>Param</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(location, index) in project_locations"
                                :key="index"
                              >
                                <td>
                                  {{
                                    locationStates.find(
                                      (element) => element.id == location.state
                                    )?.name
                                  }}
                                </td>
                                <td>{{ location.countyName }}</td>
                                <td>{{ location.payamName }}</td>
                                <td>
                                  <button
                                    v-if="isEditor"
                                    @click="removeProjectLocation(index)"
                                    class="btn btn-sm btn-danger"
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Geographic Allocation List -->

                <div class="accordion" id="geographic_allocation_accordion">
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="geographic_allocation_list"
                    >
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#geographic_allocation_collapse"
                        aria-expanded="true"
                        aria-controls="geographic_allocation_collapse"
                      >
                        Geographic Allocation List
                      </button>
                    </h2>
                    <div
                      id="geographic_allocation_collapse"
                      class="accordion-collapse collapse show"
                      aria-labelledby="geographic_allocation_list"
                      data-bs-parent="#geographic_allocation_accordion"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary mt-3"
                          data-bs-toggle="modal"
                          data-bs-target="#geographic_allocation_"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="geographic_allocation_"
                          tabindex="-1"
                          aria-labelledby="geographic_allocation_Label"
                          aria-hidden="true"
                        >
                          <div
                            class="modal-dialog modal-xl modal-dialog-scrollable"
                          >
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="geographic_allocation_Label"
                                >
                                  Add Geographic Allocation Information
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Vocabulary</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="
                                        form_recipient_region.region_vocabulary
                                      "
                                      @change="updateRegionCodeList()"
                                      class="form-control"
                                    >
                                      <option
                                        v-for="vocabulary in region_vocabularies"
                                        :key="vocabulary.code"
                                        :value="vocabulary.code"
                                      >
                                        {{ vocabulary.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Region</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      v-model="
                                        form_recipient_region.region_code
                                      "
                                      class="form-control"
                                    >
                                      <option
                                        v-for="region_code in region_codes"
                                        :key="region_code.code"
                                        :value="region_code.code"
                                      >
                                        {{ region_code.name }}
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="sub_sector"
                                    class="col-sm-4 col-form-label"
                                    ><small>Narrative (optional)</small></label
                                  >
                                  <div class="col-sm-8">
                                    <textarea
                                      v-model="
                                        form_recipient_region.region_narrative
                                      "
                                      class="form-control"
                                    ></textarea>
                                  </div>
                                </div>

                                <div class="row mx-3 mt-3">
                                  <label
                                    for="allocation"
                                    class="col-sm-4 col-form-label"
                                    ><small>Allocation (%)</small></label
                                  >
                                  <div class="col-sm-4">
                                    <input
                                      type="number"
                                      v-model="form_sector.sector_percentage"
                                      class="form-control"
                                      id="allocation"
                                      min="0"
                                      max="100"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  id="close-add-recipient-region-modal"
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  @click="addRecipientRegion()"
                                  type="button"
                                  class="btn btn-primary"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- modal -->

                        <div class="table-responsive">
                          <table class="table table-responsive">
                            <thead>
                              <tr>
                                <th>Vocabulary(Region Category)</th>
                                <th>Region Name</th>
                                <th>Percentage of Allocation(%)</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(region, index) in recipient_regions"
                                :key="index"
                              >
                                <td>{{ region.region_vocabulary }}</td>
                                <td>{{ region.region_code }}</td>
                                <td>{{ region.region_percentage }}</td>
                                <td>
                                  <button
                                    v-if="isEditor"
                                    @click="removeRecipientRegion(index)"
                                    class="btn btn-sm btn-danger"
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                              <tr class="text-muted">
                                <td>Total</td>
                                <td>&nbsp;</td>
                                <td>
                                  {{
                                    recipient_regions
                                      .map((obj) => obj.region_percentage)
                                      .reduce(
                                        (accumulator, current) =>
                                          accumulator + current,
                                        0
                                      )
                                  }}
                                </td>
                                <td>&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Geographic Allocation List -->
              </div>
              <!-- nav-geographic -->

              <div
                class="tab-pane fade"
                id="nav-attachments"
                role="tabpanel"
                aria-labelledby="nav-attachments-tab"
              >
                <h5 class="mt-3">Notes & Attachments</h5>

                <div class="row">
                  <label for="notes" class="col-sm-2 col-form-label"
                    ><small>Notes</small></label
                  >
                  <div class="col-sm-8">
                    <textarea
                      class="form-control"
                      rows="5"
                      name="notes"
                    ></textarea>
                  </div>
                </div>

                <h5 class="mt-3">Attachments and References</h5>
                <hr />

                <div class="accordion" id="attachmentAccordion">
                  <div class="accordion-item">
                    <h2
                      class="accordion-header"
                      id="attachmentCollapseHeadingOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#attachmentCollapse"
                        aria-expanded="false"
                        aria-controls="attachmentCollapse"
                      >
                        Attachment and relationship info
                      </button>
                    </h2>
                    <div
                      id="attachmentCollapse"
                      class="accordion-collapse collapse show"
                      aria-labelledby="attachmentCollapseHeadingOne"
                      data-bs-parent="#attachmentAccordion"
                    >
                      <div class="accordion-body">
                        <button
                          v-if="isEditor"
                          type="button"
                          class="btn btn-primary mt-3 mb-2"
                          data-bs-toggle="modal"
                          data-bs-target="#AttachmentModal"
                        >
                          + Add
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="AttachmentModal"
                          tabindex="-1"
                          aria-labelledby="AttachmentModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5
                                  class="modal-title"
                                  id="AttachmentModalLabel"
                                >
                                  Add / Edit Attachments
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="row mt-2">
                                  <label
                                    for="title"
                                    class="col-sm-4 col-form-label"
                                    ><small>Title</small></label
                                  >
                                  <div class="col-sm-8">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="title"
                                    />
                                  </div>
                                </div>

                                <div class="row mt-2">
                                  <label
                                    for="document_number"
                                    class="col-sm-4 col-form-label"
                                    ><small>Document Number</small></label
                                  >
                                  <div class="col-sm-8">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="document_number"
                                    />
                                  </div>
                                </div>

                                <div class="row mt-2">
                                  <label
                                    for="document_type"
                                    class="col-sm-4 col-form-label"
                                    ><small>Document Type</small></label
                                  >
                                  <div class="col-sm-8">
                                    <select
                                      class="form-control"
                                      name="document_type"
                                    >
                                      <option value="Work info">
                                        Work Info
                                      </option>
                                      <option value="word">
                                        Word Document
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div class="row mt-2">
                                  <label
                                    for="reference_url"
                                    class="col-sm-4 col-form-label"
                                    ><small>Reference URL</small></label
                                  >
                                  <div class="col-sm-8">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="reference_url"
                                    />
                                  </div>
                                </div>

                                <div class="row mt-2">
                                  <label
                                    for="filename"
                                    class="col-sm-4 col-form-label"
                                    ><small>File Name</small></label
                                  >
                                  <div class="col-sm-8">
                                    <input
                                      type="text"
                                      class="form-control"
                                      name="filename"
                                    />
                                  </div>
                                </div>

                                <div class="row mt-2">
                                  <label
                                    for="filepath"
                                    class="col-sm-4 col-form-label"
                                    ><small>File Path</small></label
                                  >
                                  <div class="col-sm-8">
                                    <input
                                      type="file"
                                      class="form-control"
                                      name="filepath"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" class="btn btn-primary">
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Analytical Works Inner Modal -->

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
                                    <a
                                      class="page-link"
                                      href="#"
                                      aria-label="Previous"
                                    >
                                      <span aria-hidden="true">&laquo;</span>
                                    </a>
                                  </li>
                                  <li class="page-item">
                                    <a class="page-link" href="#">1</a>
                                  </li>
                                  <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                  </li>
                                  <li class="page-item">
                                    <a class="page-link" href="#">3</a>
                                  </li>
                                  <li class="page-item">
                                    <a
                                      class="page-link"
                                      href="#"
                                      aria-label="Next"
                                    >
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
              </div>
              <!-- Notes & Attachments -->
              <!-- </form> -->
            </div>
            <button
              v-if="isEditor"
              @click="saveProject()"
              class="btn btn-primary"
            >
              Save
            </button> |
            <button
                v-if="currentProject?.auditable"
                @click="
                  this.$router.push({
                    name: 'project-edits',
                    params: { id: currentProject.id },
                  })
                "
                class="btn btn-warning btn"
              >
                View recent edits
              </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import flashError from "../components/flashError.vue";

export default {
  name: "project",
  components: {
    flashError,
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
      project_title: null,
      project_objective: null,
      project_planned_start_date: null,
      project_planned_end_date: null,
      project_actual_start_date: null,
      project_actual_end_date: null,
      activity_scope: 4,
      organisation_id: 1,
      activity_status: 1,
      status: "active",
      humanitarian: false,
      form_participating_org: {
        type: null,
        organisation_id: null,
        role: null,
      },

      form_budget: {
        type: 1,
        status: 1,
        period_start: null,
        period_end: null,
        value_currency: "USD",
        value_amount: 0,
        value_amount_usd: 0,
        value_amount_ssp: 0,
        value_date: null,
      },

      form_sector: {
        sector_vocabulary: null,
        sector_code: null,
        sector_percentage: 100,
        sector_narrative: [],
      },
      form_transactions: {
        id: null,
        ref: null,
        humanitarian: 0,
        transaction_type_code: null,
        transaction_date: null,
        value_currency: "USD",
        value_date: null,
        value_amount: 0,
        value_amount_usd: 0,
        value_amount_ssp: 0,
        disbursement_channel_code: null,
        recipient_country_code: "SS",
        recipient_region_code: 1,
        recipient_region_vocabulary: null,
        flow_type_code: null,
        finance_type_code: null,
        tied_status_code: null,
        aid_types: [
          {
            vocabulary: null,
            code: null,
          },
        ],
        sectors: [],
        provider_org: {
          organisation_id: null,
          type: null,
          narrative: "",
        },
        receiver_org: {
          organisation_id: null,
          type: null,
          narrative: "",
        },
      },
      form_recipient_region: {
        region_vocabulary: null,
        region_code: null,
        region_percentage: 100,
        region_narrative: [],
      },
      aid_type_vocabularies: [],
      aid_type_codes: [],
      flow_types: [],
      tied_status_codes: [],
      disbursement_channels: [],
      transaction_types: [],
      finance_types: [],
      organisation_types: [],
      organisation_roles: [],
      budget_statuses: [],
      budget_types: [],
      currencies: [],
      sector_vocabularies: [],
      region_vocabularies: [],
      sector_codes: [],
      region_codes: [],
      recipient_countries: [],
      transactions: [],
      countrywide_contribution: 0,
      currentProject: null,
      componentAction: "",
      exchange_rate_usd: 1,
      exchange_rate_ssp: 1,
      project_locations: [],
      location_counties: [],
      location_payams: [],
      form_locations: {
        state: null,
        stateName: "",
        county: null,
        countyName: "",
        payam: null,
        payamName: "",
      },
    };
  },
  computed: {
    ...mapState("project", ["projects"]),
    ...mapState("global", ["organisations"]),
    ...mapState("auth", ["user"]),
    ...mapState("locations", ["locationStates"]),
    ...mapGetters({
      admin: "auth/superadmin",
      contributor: "auth/contributor",
      manager: "auth/manager",
    }),

    isEditor() {
      //return this.contributor || this.admin || this.manager;
      return this.currentProject && this.currentProject.editable
    },

    expenditures() {
      return this.transactions.filter(
        (element) => element.transaction_type_code == 4
      );
    },

    incomingTransactions() {
      return this.transactions.filter(
        (element) => element.transaction_type_code == 1
      );
    },

    TransactionValueAmountUSD() {
      return this.form_transactions.value_amount / this.exchange_rate_usd;
    },

    TransactionValueAmountSSP() {
      return this.exchange_rate_ssp * this.TransactionValueAmountUSD;
    },

    BudgetValueAmountUSD() {
      return this.form_budget.value_amount / this.exchange_rate_usd;
    },

    BudgetValueAmountSSP() {
      return this.exchange_rate_ssp * this.BudgetValueAmountUSD;
    },
  },
  methods: {
    ...mapActions({
      updateProject: "project/updateProject",
      getProject: "project/fetchProject",
      getCodelistOptions: "codelists/fetchCodelistOptions",
      getCodelistValue: "codelists/fetchCodelistValue",
      deleteParticipatingOrg: "project/deleteParticipatingOrg",
      deleteBudget: "project/deleteBudget",
      deleteSector: "project/deleteSector",
      deleteProjectLocation: "project/deleteProjectLocation",
      deleteRecipientRegion: "project/deleteRecipientRegion",
      deleteTransaction: "project/deleteTransaction",
      convertCurrency: "global/convertCurrency",
      getLocationStates: "locations/getStates",
      getLocationCounties: "locations/getCounties",
      getLocationPayams: "locations/getPayams",
      getOrganisations : 'global/getOrganisations',
    }),

    updateCounties() {
      let payload = {
        related_id: this.form_locations.state,
      };

      this.location_counties = [];
      this.getLocationCounties(payload).then(
        (response) => {
          this.location_counties = response.data.locations;
        },
        (error) => {
          console.log(`${error}`);
        }
      );
    },

    updatePayam(event) {
      let payload = {
        related_id: this.form_locations.county,
      };
      this.location_payams = [];
      this.form_locations.countyName =
        event.target.options[event.target.options.selectedIndex].text;
      this.getLocationPayams(payload).then(
        (response) => {
          this.location_payams = response.data.locations;
        },
        (error) => {
          console.log(`${error}`);
        }
      );
    },

    updatePayamName(event) {
      this.form_locations.payamName =
        event.target.options[event.target.options.selectedIndex].text;
    },

    addLocationToProject() {
      if (this.form_locations.state !== null) {
        const alreadyAdded = this.project_locations.findIndex(
          (item) =>
            item.state == this.form_locations.state &&
            item.county == this.form_locations.county &&
            item.payam == this.form_locations.payam
        );
        if (alreadyAdded === -1) {
          this.project_locations.push({ ...this.form_locations });
          this.form_locations.state = null;
          this.form_locations.county = null;
          this.form_locations.payam = null;
          this.form_locations.countyName = "";
          this.form_locations.payamName = "";
          document.getElementById("close-add-location-modal").click();
        }
      }
    },

    getUSDExchangeRate(isBudget) {
      this.exchange_rate_usd = 1;
      if (
        this.form_transactions.value_currency !== null ||
        this.form_budget.value_currency !== null
      ) {
        let payload = {
          source_currency: "USD",
          destination_currency:
            isBudget == true
              ? this.form_budget.value_currency
              : this.form_transactions.value_currency,
          amount: 1,
        };
        this.convertCurrency(payload).then(
          (response) => {
            this.exchange_rate_usd = response.data.data;
          },
          (error) => {
            const errorMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            console.log(errorMessage);
          }
        );
      }
    },

    getSSPExchangeRate() {
      if (
        this.form_transactions.value_currency !== null ||
        this.form_budget.value_currency !== null
      ) {
        let payload = {
          source_currency: "USD",
          destination_currency: "SSP",
          amount: 1,
        };
        this.convertCurrency(payload).then(
          (response) => {
            this.exchange_rate_ssp = response.data.data;
          },
          (error) => {
            const errorMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            console.log(errorMessage);
          }
        );
      }
    },

    updateExchangeRates(isBudget) {
      this.getUSDExchangeRate(isBudget);
      this.getSSPExchangeRate();
    },

    updateSectorCodeList() {
      this.sector_codes = [];
      let codelist = this.sector_vocabularies.find(
        (element) => element.code === this.form_sector.sector_vocabulary
      )?.related_codelist;
      this.getCodelistOptions({
        codelist: codelist,
        language: this.user?.language,
      }).then(
        (response) => {
          //
          this.sector_codes = response.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );
    },

    addSectorContribution() {
      if (
        this.form_sector.sector_vocabulary != null &&
        this.form_sector.sector_code != null &&
        this.form_sector.sector_percentage != null
      ) {
        // abort if already 100%
        let currentPercentage = this.sectors
          .map((obj) => obj.sector_percentage)
          .reduce((accumulator, current) => accumulator + current, 0);
        if (currentPercentage >= 100) return;
        if (
          undefined !==
          this.sectors.find(
            (element) =>
              element.sector_vocabulary ===
                this.form_sector.sector_vocabulary &&
              element.sector_code == this.form_sector.sector_code
          )
        )
          return;
        this.sectors.push({ ...this.form_sector });
        this.form_sector.sector_vocabulary = null;
        this.form_sector.sector_code = null;
        this.form_sector.sector_percentage = 100;
        this.form_sector.sector_narrative = [];
        document.getElementById("close-add-sector-modal").click();
      }
    },
    removeSectorContribution(index) {
      if (confirm("Are you sure you want to delete?")) {
        if (this.sectors[index] !== undefined) {
          const sid = this.sectors[index]?.sid;
          if (sid !== null) {
            this.deleteSector(sid).then(
              (response) => {
                //
                let responseMessage = response.data.data;
                this.$store.commit("showSnackbar", responseMessage);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                console.log(resMessage);
              }
            );
          }
          this.sectors.splice(index, 1);
        }
      }
    },

    updateRegionCodeList() {
      this.region_codes = [];
      let codelist = this.region_vocabularies.find(
        (element) =>
          element.code === this.form_recipient_region.region_vocabulary
      )?.related_codelist;
      this.getCodelistOptions({
        codelist: codelist,
        language: this.user?.language,
      }).then(
        (response) => {
          //
          this.region_codes = response.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );
    },

    addRecipientRegion() {
      if (
        this.form_recipient_region.region_vocabulary != null &&
        this.form_recipient_region.region_code != null &&
        this.form_recipient_region.region_percentage != null
      ) {
        // abort if already 100%
        let currentPercentage = this.recipient_regions
          .map((obj) => obj.region_percentage)
          .reduce((accumulator, current) => accumulator + current, 0);
        if (currentPercentage >= 100) return;
        if (
          undefined !==
          this.recipient_regions.find(
            (element) =>
              element.region_vocabulary ===
                this.form_recipient_region.region_vocabulary &&
              element.region_code == this.form_recipient_region.region_code
          )
        )
          return;
        this.recipient_regions.push({ ...this.form_recipient_region });
        this.form_recipient_region.region_vocabulary = null;
        this.form_recipient_region.region_code = null;
        this.form_recipient_region.region_percentage = 100;
        this.form_recipient_region.region_narrative = [];
        document.getElementById("close-add-recipient-region-modal").click();
      }
    },
    removeRecipientRegion(index) {
      if (confirm("Are you sure you want to delete?")) {
        if (this.recipient_regions[index] !== undefined) {
          const sid = this.recipient_regions[index]?.sid;
          if (sid !== null) {
            this.deleteRecipientRegion(sid).then(
              (response) => {
                //
                let responseMessage = response.data.data;
                this.$store.commit("showSnackbar", responseMessage);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                console.log(resMessage);
              }
            );
          }
          this.recipient_regions.splice(index, 1);
        }
      }
    },

    addParticipatingOrg() {
      if (
        this.form_participating_org.type != null &&
        this.form_participating_org.organisation_id != null &&
        this.form_participating_org.role != null
      ) {
        const orgAlreadyadded = this.participating_organisations.findIndex(
          (org) =>
            org.organisation_id === this.form_participating_org.organisation_id
        );
        if (orgAlreadyadded == -1) {
          console.log("hoooray");
          let participatingOrg = {
            organisation_id: this.form_participating_org.organisation_id,
            type: this.form_participating_org.type,
            role: this.form_participating_org.role,
          };
          this.participating_organisations.push(participatingOrg);
          this.form_participating_org.type = null;
          this.form_participating_org.role = null;
          this.form_participating_org.organisation_id = null;
          document.getElementById("close-participating-org-modal").click();
        }
      }
    },
    removeParticipatingOrg(index) {
      if (confirm("Are you sure you want to delete?")) {
        if (this.participating_organisations[index] !== undefined) {
          const sid = this.participating_organisations[index]?.sid;
          if (sid !== null) {
            this.deleteParticipatingOrg(sid).then(
              (response) => {
                //
                let responseMessage = response.data.data;
                this.$store.commit("showSnackbar", responseMessage);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                console.log(resMessage);
              }
            );
          }
          this.participating_organisations.splice(index, 1);
        }
      }
    },

    removeProjectLocation(index) {
      if (confirm("Are you sure you want to delete?")) {
        if (this.project_locations[index] !== undefined) {
          const sid = this.project_locations[index]?.sid;
          if (sid !== null) {
            this.deleteProjectLocation(sid).then(
              (response) => {
                //
                let responseMessage = response.data.data;
                this.$store.commit("showSnackbar", responseMessage);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                console.log(resMessage);
              }
            );
          }
          this.project_locations.splice(index, 1);
        }
      }
    },

    addBudget() {
      if (
        this.form_budget.value_amount != 0 &&
        this.form_budget.period_start != null &&
        this.form_budget.period_end != null
      ) {
        let budget = {
          type: this.form_budget.type,
          status: this.form_budget.status,
          period_start: this.form_budget.period_start,
          period_end: this.form_budget.period_end,
          value_currency: this.form_budget.value_currency,
          value_date: this.form_budget.value_date,
          value_amount: this.form_budget.value_amount,
        };
        this.budgets.push(budget);
        this.form_budget.type = 1;
        this.form_budget.status = 1;
        this.form_budget.value_amount = 0;
        (this.form_budget.period_start = null),
          (this.form_budget.period_end = null),
          document.getElementById("close-add-budget-modal").click();
      }
    },
    removeBudget(index) {
      if (confirm("Are you sure you want to delete?")) {
        if (this.budgets[index] !== undefined) {
          const sid = this.budgets[index]?.sid;
          if (sid !== null) {
            this.deleteBudget(sid).then(
              (response) => {
                //
                let responseMessage = response.data.data;
                this.$store.commit("showSnackbar", responseMessage);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                console.log(resMessage);
              }
            );
          }
          this.budgets.splice(index, 1);
        }
      }
    },

    updateAidTypes() {
      this.aid_type_codes = [];
      let codelist = this.aid_type_vocabularies.find(
        (element) =>
          element.code === this.form_transactions.aid_types[0].vocabulary
      )?.related_codelist;
      this.getCodelistOptions({
        codelist: codelist,
        language: this.user?.language,
      }).then(
        (response) => {
          //
          this.aid_type_codes = response.data;
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          console.log(resMessage);
        }
      );
    },
    clearTransactionForm() {
      this.form_transactions.id = null;
      this.form_transactions.ref = null;
      this.form_transactions.humanitarian = 0;
      this.form_transactions.transaction_type_code = null;
      this.form_transactions.transaction_date = null;
      this.form_transactions.value_currency = "USD";
      this.form_transactions.value_date = null;
      (this.form_transactions.value_amount = 0),
        (this.form_transactions.disbursement_channel_code = null);
      this.form_transactions.aid_types[0].vocabulary = null;
      this.form_transactions.aid_types[0].code = null;
      this.form_transactions.provider_org.organisation_id = null;
      this.form_transactions.provider_org.type = null;
      this.form_transactions.provider_org.narrative = "";
      this.form_transactions.receiver_org.organisation_id = null;
      this.form_transactions.receiver_org.type = null;
      this.form_transactions.receiver_org.narrative = "";
    },

    areRequiredTransactionFieldsFilled() {
      if (
        this.form_transactions.value_amount != 0 &&
        this.form_transactions.transaction_date != null &&
        this.form_transactions.aid_types[0].code != null &&
        this.form_transactions.aid_types[0].vocabulary != null &&
        this.form_transactions.provider_org.organisation_id != null &&
        this.form_transactions.provider_org.type != null &&
        this.form_transactions.receiver_org.organisation_id != null &&
        this.form_transactions.receiver_org.type != null
      ) {
        return true;
      }

      return false;
    },

    addIncomingFunds() {
      if (this.areRequiredTransactionFieldsFilled()) {
        this.form_transactions.transaction_type_code = 1;
        this.form_transactions.id = Date.now();
        //check if already added
        this.transactions.push(
          JSON.parse(JSON.stringify(this.form_transactions))
        );
        this.clearTransactionForm();
        document.getElementById("close-add-incoming-funds-modal").click();
      }
    },
    removeTransaction(id) {
      if (confirm("Are you sure you want to delete?")) {
        console.log(id);
        if (
          this.transactions.findIndex((element) => element.id === id) !== -1
        ) {
          const index = this.transactions.findIndex(
            (element) => element.id === id
          );
          const is_db = this.transactions[index].is_db;
          if (is_db !== null || is_db !== undefined) {
            this.deleteTransaction(id).then(
              (response) => {
                //
                let responseMessage = response.data.data;
                this.$store.commit("showSnackbar", responseMessage);
              },
              (error) => {
                const resMessage =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();

                console.log(resMessage);
              }
            );
          }
          this.transactions.splice(index, 1);
        }
      }
    },

    addExpense() {
      if (this.areRequiredTransactionFieldsFilled()) {
        this.form_transactions.transaction_type_code = 4;
        this.form_transactions.id = Date.now();
        //check if already added
        this.transactions.push(
          JSON.parse(JSON.stringify(this.form_transactions))
        );
        this.clearTransactionForm();
        document.getElementById("close-add-expense-modal").click();
      }
    },
    removeExpense(id) {
      if (confirm("Are you sure you want to delete?")) {
        const index = this.transactions.findIndex(
          (element) => element.id === id
        );
        if (index !== -1) this.transactions.splice(index, 1);
      }
    },

    fillFormModels() {
      if (this.currentProject !== undefined || this.currentProject !== null) {
        this.humanitarian = !!this.currentProject.humanitarian
        this.project_title = this.currentProject.default_title;
        this.project_objective =
          this.currentProject.description[0].narratives.find(
            (element) => element.lang == "en"
          )?.narrative;
        this.project_planned_start_date =
          this.currentProject.activity_date.find(
            (element) => element.iati_type == 1
          )?.iati_iso_date;
        this.project_planned_end_date = this.currentProject.activity_date.find(
          (element) => element.iati_type == 3
        )?.iati_iso_date;
        this.project_actual_start_date = this.currentProject.activity_date.find(
          (element) => element.iati_type == 2
        )?.iati_iso_date;
        this.project_actual_end_date = this.currentProject.activity_date.find(
          (element) => element.iati_type == 4
        )?.iati_iso_date;
        this.activity_status = this.currentProject.activity_status;
        this.participating_organisations =
          this.currentProject.participating_org.map(function (element) {
            return {
              sid: element.id,
              organisation_id: element.organisation_id,
              role: element.iati_role,
              type: element.iati_type,
            };
          });
        this.budgets = this.currentProject.budget.map(function (element) {
          return {
            sid: element.id,
            type: element.iati_type,
            status: element.iati_status,
            period_start: element.iati_period_start_iso_date,
            period_end: element.iati_period_end_iso_date,
            value_currency: element.iati_value_currency,
            value_amount: element.iati_value_amount,
            value_date: element.iati_value_date,
          };
        });
        this.sectors = this.currentProject.sector.map(function (element) {
          return {
            sid: element.id,
            sector_code: element.iati_code,
            sector_vocabulary: element.iati_vocabulary,
            sector_percentage: element.iati_percentage,
            sector_narrative: element.narratives,
            in_database: true,
          };
        });
        this.recipient_countries = this.currentProject.recipient_country.map(
          function (element) {
            return {
              sid: element.id,
              country_code: element.iati_code,
              country_percentage: element.iati_percentage,
              narratives: element.narratives,
              in_database: true,
            };
          }
        );
        this.countrywide_contribution =
          this.recipient_countries.findIndex(
            (element) =>
              element.country_code == "SS" && element.country_percentage == 100
          ) !== -1
            ? 1
            : 0;

        this.recipient_regions = this.currentProject.recipient_region.map(
          function (element) {
            return {
              sid: element.id,
              region_vocabulary: element.iati_vocabulary,
              region_code: element.iati_code,
              region_percentage: element.iati_percentage,
              region_narrative: element.narratives,
              in_database: true,
            };
          }
        );
        this.transactions = this.currentProject.transaction.map(function (
          element
        ) {
          return {
            is_db: true,
            id: element.id,
            ref: element.ref,
            humanitarian: element.iati_humanitarian,
            transaction_type_code: element.iati_transaction_type_code,
            transaction_date: element.iati_transaction_date,
            value_currency: element.iati_value_currency,
            value_date: element.iati_value_date,
            value_amount: element.iati_value_amount,
            disbursement_channel_code: element.iati_disbursement_channel_code,
            recipient_country_code: element.iati_recipient_country_code,
            recipient_region_code: element.iati_recipient_region_code,
            recipient_region_vocabulary:
              element.iati_recipient_region_vocabulary,
            flow_type_code: element.iati_flow_type_code,
            finance_type_code: element.iati_finance_type_code,
            tied_status_code: element.iati_tied_status_code,
            aid_types: [
              {
                vocabulary: element.aid_types?.[0]?.iati_vocabulary,
                code: element.aid_types?.[0]?.iati_code,
              },
            ],
            sectors: [],
            provider_org: {
              organisation_id: element.provider_org?.organisation_id,
              type: element.provider_org?.iati_type,
              narrative: "",
            },
            receiver_org: {
              organisation_id: element.receiver_org?.organisation_id,
              type: element.receiver_org?.type,
            },
          };
        });

        this.project_locations = this.currentProject.location.map(function (
          element
        ) {
          return {
            sid: element.id,
            state: element.state,
            county: element.county,
            countyName: element.county_name,
            payam: element.payam,
            payamName: element.payam_name,
            in_database: true,
          };
        });
      }
    },
    saveProject() {
      this.apiErrors = false;
      this.generalError = false;
      this.isLoading = true;
      this.validationErrors = false;
      //recipient country
      // let recipient_country = {
      //   country_code: "SS",
      //   country_percentage: this.countrywide_contribution == 1 ? 100 : null,
      // };
      // this.recipient_countries.push(recipient_country);

      let payload = {
        id: this.currentProject.id,
        humanitarian: this.humanitarian,
        sectors: this.sectors,
        recipient_countries: this.recipient_countries,
        recipient_regions: this.recipient_regions,
        budgets: this.budgets,
        transactions: this.transactions,
        participating_organisations: this.participating_organisations,
        project_title: this.project_title,
        project_objective: this.project_objective,
        project_planned_start_date: this.project_planned_start_date,
        project_planned_end_date: this.project_planned_end_date,
        project_actual_start_date: this.project_actual_start_date,
        project_actual_end_date: this.project_actual_end_date,
        activity_scope: this.activity_scope,
        organisation_id: this.organisation_id,
        activity_status: this.activity_status,
        status: this.status,
        locations: this.project_locations,
      };
      this.updateProject(payload).then(
        (response) => {
          //
          this.isLoading = false;
          let savedProject = response.data.data;
          this.$store.commit("project/UPDATE_PROJECT", savedProject);
          this.$store.commit("showSnackbar", "success");
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
    if (isLoggedIn) {
      //put user and translations to vuex state
      let token = localStorage.getItem("token");
      let loggedInUser = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("auth/SET_TOKEN", token);
      this.$store.commit("auth/SET_USER", loggedInUser);
    }
    this.getLocationStates();
    this.getOrganisations();
    let idParam = this.$route.params.id;
    if (idParam) {
      this.getProject(idParam).then(
        (response) => {
          //
          this.isLoading = false;
          let currentProject = response.data.data;
          this.currentProject = currentProject;
          this.componentAction = "Project: " + currentProject.default_title;
          this.isLoading = false;
          this.fillFormModels();
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
          this.errors = resMessage;
          this.$store.commit("showSnackbar", "Error Fetching Project");
        }
      );
    }

    this.getCodelistOptions({
      codelist: "OrganisationType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.organisation_types = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "OrganisationRole",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.organisation_roles = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "BudgetType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.budget_types = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "BudgetStatus",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.budget_statuses = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "Currency",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.currencies = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "SectorVocabulary",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.sector_vocabularies = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "RegionVocabulary",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.region_vocabularies = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "AidTypeVocabulary",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.aid_type_vocabularies = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "AidType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.aid_type_codes = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "TiedStatus",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.tied_status_codes = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "TransactionType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.transaction_types = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "FlowType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.flow_types = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "DisbursementChannel",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.disbursement_channels = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );

    this.getCodelistOptions({
      codelist: "FinanceType",
      language: this.user?.language,
    }).then(
      (response) => {
        //
        this.finance_types = response.data;
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log(resMessage);
      }
    );
  },
};
</script>

<style scoped>
.p-page {
  padding-top: 4em;
  padding-bottom: 4em;
}

.card .card-header {
  background-color: rgba(0, 41, 117, 0.87);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #fff;
}

.card {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-color: #93c1e0;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 0px 16px 0px rgba(44, 62, 80, 0.21);
}

</style>
