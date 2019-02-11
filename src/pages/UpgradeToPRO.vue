<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">Vue Material Dashboard PRO</h4>
            <p class="category">
              Are you looking for more components? Please check our Premium
              Version of Vue Material Dashboard.
            </p>
          </md-card-header>

          <md-card-content>
            <div class="table-responsive table-upgrade">
              <table class="table" cellspacing="0">
                <thead>
                  <tr>
                    <th></th>
                    <th class="text-center">Free</th>
                    <th class="text-center">PRO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Components</td>
                    <td class="text-center">60</td>
                    <td class="text-center">200</td>
                  </tr>
                  <tr>
                    <td>Plugins</td>
                    <td class="text-center">2</td>
                    <td class="text-center">15</td>
                  </tr>
                  <tr>
                    <td>Example Pages</td>
                    <td class="text-center">3</td>
                    <td class="text-center">27</td>
                  </tr>
                  <tr>
                    <td>Login, Register, Pricing, Lock Pages</td>
                    <td class="text-center">
                      <i class="fa fa-times text-danger"></i>
                    </td>
                    <td class="text-center">
                      <i class="fa fa-check text-success"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      DataTables, VectorMap, SweetAlert, Wizard,
                      jQueryValidation, FullCalendar etc...
                    </td>
                    <td class="text-center">
                      <i class="fa fa-times text-danger"></i>
                    </td>
                    <td class="text-center">
                      <i class="fa fa-check text-success"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Mini Sidebar</td>
                    <td class="text-center">
                      <i class="fa fa-times text-danger"></i>
                    </td>
                    <td class="text-center">
                      <i class="fa fa-check text-success"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Premium Support</td>
                    <td class="text-center">
                      <i class="fa fa-times text-danger"></i>
                    </td>
                    <td class="text-center">
                      <i class="fa fa-check text-success"></i>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td class="text-center">Free</td>
                    <td class="text-center">Just $59</td>
                  </tr>
                  <tr>
                    <td class="text-center"></td>
                    <td class="text-center">
                      <md-button href="#" class="md-default md-round" disabled
                        >Current Version</md-button
                      >
                    </td>
                    <td class="text-center">
                      <md-button
                        target="_blank"
                        href="https://www.creative-tim.com/product/vue-material-dashboard-pro/?ref=vue-md-free-upgrade-live"
                        class="md-info md-round"
                        >Upgrade to PRO</md-button
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.md-card {
  margin-top: 50px;
}

.table-responsive {
  overflow: auto;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  thead tr th {
    font-size: 1.063rem;
    border-top-width: 0;
    font-weight: 300;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  & > tbody > tr > td,
  & > tbody > tr > th,
  & > tfoot > tr > td,
  & > tfoot > tr > th,
  & > thead > tr > td,
  & > thead > tr > th {
    padding: 12px 8px;
    vertical-align: middle;
  }

  & > tbody > tr {
    position: relative;
  }

  td,
  th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
}
</style>
