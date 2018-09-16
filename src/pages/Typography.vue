<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
    <md-card-header data-background-color="blue">
      <div class="md-title">Design principles of Lambda’s economic system</div>
    </md-card-header>

    <md-card-content>
      <p>The two core ideas of economics are that goods and resources are scarce and that society must use them effectively.
  In fact, it is precisely because of the scarcity of resources and people’s desire for efficiency that the blockchain
  economy has attracted people’s attention. In the Lambda system, storage space is relatively abundant, but
  storage that ensures security, privacy, availability, and data integrity is a scarce resource. Transaction between
  providers and demanders of such storage resources is what constitutes Lambda’s economic system.
  For Lambda’s economic organization, the three fundamental macro-economic questions that need to be defined
  are: What and how much of it is Lambda producing? How does production take place? For whom is Lambda
  producing?</p>
  <p>What and how much of it is Lambda producing? The Lambda organization produces decentralized storage space
  that guarantees security, privacy, availability, and data integrity, with the more expensive part also ensuring data
  retrievability. At the current time, the resources that can be traded within the Lambda system are: storage space,
  network bandwidth, short domain name addressing, and verification capability.
  How does production take place? Lambda’s storage miners provide storage space, its retrieve miners provide fast
  access to data, and its verification miners ensure the verification of POR and PDP.
  For whom is Lambda producing? Lambda is producing for all Dapps, as well as business scenarios that require
  secure and private data flowing in a certain direction</p>
  <p>
    Therefore, we can define the production-possibility frontier (PPF) of Lambda as follows:
    <img style="width:50%" src="../assets/img/lambdappf.png"><br/>
    We see, therefore, that the Lambda system consists primarily of verification resources and storage resources. The
total quantity of verification resources is limited and constant: there are 1024 validators in the system, and the total
quantity of short domain name resources is also limited and constant. Renewable resources mainly refer to storage
resources and network resources, which can grow over time.
  </p>
    </md-card-content>


  </md-card>
  <md-card>
<md-card-header data-background-color="blue">
<div class="md-title">1 Validator</div>
</md-card-header>

<md-card-content>
  <p>
  Validators are responsible for validating the ledgers of MainChains and SubChains, as well as the POR and PDP.
  There are 1024 validators in total, and they can obtain part of the block generation rewards. The number of validators
  deployed is around a thousand, primarily to strike a reasonable balance between system security and performance.
</p>
<p>
  Validator nodes are divided into fixed and random ones. Among the 512 fixed validator nodes, 200 are operated by
  the Lambda Foundation, 100 are distributed to programmers in the developer community who have submitted valuable
  code to Lambda, and another 100 are distributed to Lambda enthusiasts who participated in the public
  financing. The rest are obtained by holders of Lambda Coins through competition.
</p>
<p>
  To qualify as one of the 512 random validators, a validator needs to pledge a small portion of LAMBs to be a
  member of the verification group.
</p><p>
  The validator can get 400 million LAMBs in the first year, after which the amount decreases over time.
</p>
  For users of the Lambda system, the validator's ability to verify the ledgers is the inherent logic of the system. For
  the users’ ability to verify the data they store, Lambda provides a fixed low-frequency validator to meet the basic
  requirements, but verification with higher frequency and more nodes needs to be purchased in the market. The
  purchase adopts the Bancor mechanism, and the fee is placed in a fee pool, which can be regarded as a deflation
  mechanism. 50% of the bonuses in the pool are awarded to KEY holders, and another 50% will be destroyed by
  burning. A KEY can be understood as an equity-like token in Lambda system, and its specific meaning will be
  further explained below. Validator resources trade in the system’s built-in exchange and the corresponding transaction
  pair is VAD/LAMB.
</p>
<p>
  (In the economic sense, validators, similar to EOS RAM, are scarce resources with fixed total quantity in the
  system.)
</p>
</md-card-content>


</md-card>
<md-card>
  <md-card-header data-background-color="blue">
    <div class="md-title">2 Short domain names</div>
  </md-card-header>
  <md-card-content>
    <p>
    LAMB storage resources can be accessed with short domain names, which are unique resources in the Lambda
    system and need to be obtained through auction. Anyone can bid for any account name, and each bid for a particular
    account name must be 10% higher than the previous one. The price will double after seven consecutive bids,
    and the highest bidder needs to maintain the current highest bid for 24 hours before a deal can be concluded.
  </p>
  <p>
    There is a deflation mechanism in the short domain name auction system. Specifically, there is a fee pool, of which
    50% of the bonuses will be awarded to KEY holders, and another 50% will be destroyed by burning.
  </p>
  </md-card-content>
</md-card>
<md-card>
  <md-card-header data-background-color="blue">
    <div class="md-title">3 Storage resources</div>
  </md-card-header>
  <md-card-content>
    <p>
      As Lambda is a decentralized storage project, storage resources are the core resources in the Lambda system.
  The supply of storage resources is relatively scalable, so the storage resources are economically similar to the CPU
  and NET of EOS within the system.
  </p>
  <p>
    Given that Lambda decoupled the design of PDP and block generation rewards when designing the system, without
using Proof-of-Space and Proof-of-Capacity, it does not need to combat complex Sybil attacks but still needs to
consider the repeated addition of a physical node. As a result, in the Lambda system, storage resource providers
need to pledge certain LAMBs for a token called KEY. At the same time, a Bancor-based transaction pair, Storage/LAMB,
will emerge in the storage resource exchange. To buy a Storage/LAMB transaction pair means that
the buyer needs 1GB of storage space per month.
  </p>
  <p>
    When holding KEYs, storage resource providers can obtain the block generation reward of staking hold in the
system, the income of leasing storage resources, and the fee reward of validators and short domain name pools.

  </p>
  </md-card-content>
</md-card>
<md-card>
  <md-card-header data-background-color="blue">
    <div class="md-title">4 Network resources</div>
  </md-card-header>
  <md-card-content>
    <p>
      Retrieval miners sell network resources; their data come from storage miners; they do not need to pledge LAMBs
and will only obtain the traffic fees paid by users in the retrieval market, without additional rewards.
  </p>

  </md-card-content>
</md-card>

        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Token Distribution</h4>
            <p class="category">Token For Public Sale</p>
          </md-card-header>
          <md-card-content>
            <div id="typography">
               <div class="row">
                   <img src="../assets/img/tokensale1.jpg">

               </div>
               <div class="row">


               </div>
               <md-table>


            <md-table-row>
              <md-table-cell>Total quantity</md-table-cell>
              <md-table-cell>10 billion Lambda Coins</md-table-cell>

            </md-table-row>

            <md-table-row>
              <md-table-cell >Pledge</md-table-cell>
              <md-table-cell>Validators and nominators need to pledge approximately 8-12% of the total LAMBs.</md-table-cell>

            </md-table-row>

            <md-table-row>
              <md-table-cell>Rental</md-table-cell>
              <md-table-cell>Users renting Lambda cloud databases need to purchase LAMBs at the exchange.</md-table-cell>

            </md-table-row>
            <md-table-row>
              <md-table-cell>Transactions</md-table-cell>
              <md-table-cell>Data buyers in the marketplace need to purchase LAMBs at the exchange.</md-table-cell>

            </md-table-row>
            <md-table-row>
              <md-table-cell>Rule</md-table-cell>
              <md-table-cell>
                <div style="text-align: left;">All Lambda Coins will have been mined in 20 years, with 10% allocated to the founding team, 30% for fundraising,20% to the Foundation, and 40% as block generation rewards.After 20 years, the total quantity of tokens will keep growing at a slow rate of about 0.5% per year.</div>
                <!-- <div>20% to the Foundation, and 40% as block generation rewards. </div> -->
                <!-- <div>After 20 years, the total quantity of tokens will keep growing at a slow rate of about 0.5% per year.</div> -->

            </md-table-cell>

            </md-table-row>


          </md-table>
           </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
p   {   text-indent:2em   }
</style>
