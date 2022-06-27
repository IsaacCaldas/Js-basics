class FinancialMove { 
  constructor(name = 'Generic', value = 0) {
    this.name = name
    this.value = value
  }
}

class BillingCycle {
  constructor(month, year) {
    this.month = month
    this.year = year  
    this.billing_cycles = []
  }

  addBillingCycle(...billing_cycles) {
    billing_cycles.map(b_cycle => this.billing_cycles.push(b_cycle))
  }
  history() {
    let total_value = 0
    this.billing_cycles.map(b_cycle => {
      total_value += b_cycle.value
    })
    return total_value.toFixed(2)
  }
}

const wage = new FinancialMove('Wage', 3499.99)
const light_bill = new FinancialMove('Light Bill', -220.49)

const bills = new BillingCycle(6, 2022)
bills.addBillingCycle(wage, light_bill)

console.log(`R$ ${bills.history()}`)