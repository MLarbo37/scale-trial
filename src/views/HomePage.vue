<template>
  <div class="home">
    <div class="top">
      <scale-card class="cardA" label="Example Card">
        <div>
          <h4>Account Balance</h4>
        </div>
        <div class="card">
          <div class="colA">
            <p>Total Balance</p>
            <h5>$54757</h5>
          </div>
          <hr />
          <div class="colA">
            <p>Total Receivables</p>
            <h5>$98800</h5>
          </div>
          <hr />
          <div class="colA">
            <p>Total Expenditure</p>
            <h5>$4324</h5>
          </div>
        </div>
      </scale-card>
      <scale-card
        class="cardB"
        to="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        label="Example Card"
      >
        <div>
          <h4>Bank Info</h4>
        </div>
        <div class="card">
          <div class="colB">
            <p>Account Number</p>
            <h5>$54757</h5>
          </div>
          <hr />
          <div class="colB">
            <p>Account Name</p>
            <h5>$98800</h5>
          </div>
        </div>
      </scale-card>
    </div>
    <div>
      <scale-tab-nav class="tabs">
        <scale-tab-header slot="tab">All</scale-tab-header>
        <scale-tab-panel slot="panel">
          <scale-table>
            <table>
              <caption>
                Table title
              </caption>
              <thead>
                <tr>
                  <!-- aria-sort can be descending or ascending -->
                  <th
                    tabindex="0"
                    aria-sort="descending"
                    onkeyup="handleKeyUp(event, 'amount')"
                    onclick="sortTable('amount')"
                    id="amount"
                  >
                    Amount
                  </th>
                  <!-- aria-disabled="true" disables sorting -->
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'stats')"
                    onclick="sortTable('stats')"
                    id="stats"
                  >
                    From/To
                  </th>
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'time')"
                    onclick="sortTable('time')"
                    id="time"
                  >
                    Date
                  </th>
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'euros')"
                    onclick="sortTable('euros')"
                    id="euros"
                  >
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="qwerty" v-for="item in statement" :key="item.amount">
                  <td>{{ item.amount }}</td>
                  <td>{{ item.person }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.category }}</td>
                </tr>
              </tbody>
            </table>
          </scale-table>
        </scale-tab-panel>
        <scale-tab-header slot="tab">Receivables</scale-tab-header>
        <scale-tab-panel slot="panel">
          <scale-table>
            <table>
              <caption>
                Table title
              </caption>
              <thead>
                <tr>
                  <!-- aria-sort can be descending or ascending -->
                  <th
                    tabindex="0"
                    aria-sort="descending"
                    onkeyup="handleKeyUp(event, 'amount')"
                    onclick="sortTable('amount')"
                    id="amount"
                  >
                    Amount
                  </th>
                  <!-- aria-disabled="true" disables sorting -->
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'stats')"
                    onclick="sortTable('stats')"
                    id="stats"
                  >
                    From/To
                  </th>
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'time')"
                    onclick="sortTable('time')"
                    id="time"
                  >
                    Date
                  </th>
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'euros')"
                    onclick="sortTable('euros')"
                    id="euros"
                  >
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="qwerty" v-for="item in statement" :key="item.amount">
                  <td>{{ item.amount }}</td>
                  <td>{{ item.person }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.category }}</td>
                </tr>
              </tbody>
            </table>
          </scale-table>
        </scale-tab-panel>
        <scale-tab-header slot="tab">Expenses</scale-tab-header>
        <scale-tab-panel slot="panel">
          <scale-table>
            <table>
              <caption>
                Table title
              </caption>
              <thead>
                <tr>
                  <!-- aria-sort can be descending or ascending -->
                  <th
                    tabindex="0"
                    aria-sort="descending"
                    onkeyup="handleKeyUp(event, 'amount')"
                    onclick="sortTable('amount')"
                    id="amount"
                  >
                    Amount
                  </th>
                  <!-- aria-disabled="true" disables sorting -->
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'stats')"
                    onclick="sortTable('stats')"
                    id="stats"
                  >
                    From/To
                  </th>
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'time')"
                    onclick="sortTable('time')"
                    id="time"
                  >
                    Date
                  </th>
                  <th
                    tabindex="0"
                    onkeyup="handleKeyUp(event, 'euros')"
                    onclick="sortTable('euros')"
                    id="euros"
                  >
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="qwerty" v-for="item in statement" :key="item.amount">
                  <td>{{ item.amount }}</td>
                  <td>{{ item.person }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.category }}</td>
                </tr>
              </tbody>
            </table>
          </scale-table>
        </scale-tab-panel>
      </scale-tab-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      statement: [
        {
          amount: 10000,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "expenses"
        },
        {
          amount: 23000,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "receivable"
        },
        {
          amount: 500,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "expenses"
        },
        {
          amount: 1000,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "receivable"
        },
        {
          amount: 100,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "expenses"
        },
        {
          amount: 40000,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "receivable"
        },
        {
          amount: 1200,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "expenses"
        },
        {
          amount: 4500,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "receivable"
        },
        {
          amount: 2300,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "expenses"
        },
        {
          amount: 9000,
          person: "Michael Larbo",
          date: "12/09/23",
          category: "receivable"
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 10px;
  margin: 10px;
  width: 100%;
}
.colA {
  width: 30%;
}
.colB {
  width: 45%;
}
.card,
.top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 8px;
}
.card *,
.top * {
  box-sizing: border-box;
}
.cardA {
  width: 65%;
}
.cardB {
  width: 30%;
}
@media screen and (max-width: 600px) {
  .cardA,
  .cardB {
    width: 100%;
  }
}
.tabs {
  color: white;
}
.qwerty{
  color: #ffffff
}
</style>