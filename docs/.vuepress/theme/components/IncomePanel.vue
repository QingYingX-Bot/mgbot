<script setup lang="ts">
import { computed } from 'vue'
import { incomeRecords } from '../data/income-records'

const totalCount = computed(() => incomeRecords.length)
const totalAmount = computed(() => incomeRecords.reduce((sum, record) => sum + record.amount, 0))
const formattedTotalAmount = computed(() => formatAmount(totalAmount.value))

function formatAmount(amount: number): string {
  return `¥ ${amount.toFixed(2)}`
}
</script>

<template>
  <CardGrid :cols="2">
    <Card title="总条数" icon="ri:file-list-3-line">
      {{ totalCount }} 笔
    </Card>
    <Card title="总金额" icon="ri:money-cny-circle-line">
      {{ formattedTotalAmount }}
    </Card>
  </CardGrid>

  <h2>收益明细</h2>

  <div class="income-table-wrap">
    <table class="income-table">
      <thead>
        <tr>
          <th class="center">序号</th>
          <th class="center">平台</th>
          <th class="center">账号</th>
          <th class="right">金额</th>
          <th>时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="record in incomeRecords" :key="record.id">
          <td class="center">{{ record.id }}</td>
          <td class="center">{{ record.platform }}</td>
          <td class="center">{{ record.accountMasked }}</td>
          <td class="right">{{ formatAmount(record.amount) }}</td>
          <td>{{ record.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.income-table-wrap {
  width: 100%;
  margin-top: 10px;
  overflow-x: auto;
}

.income-table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
}

.income-table th,
.income-table td {
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  white-space: nowrap;
}

.income-table th {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}
</style>
