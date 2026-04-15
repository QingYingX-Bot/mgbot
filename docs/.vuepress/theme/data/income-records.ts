export interface IncomeRecord {
  id: number
  platform: string
  accountMasked: string
  amount: number
  time: string
}

export const incomeRecords: IncomeRecord[] = [
  { id: 1, platform: 'QQ', accountMasked: '105*****65', amount: 20.0, time: '2025/4/30 21:12' },
  { id: 2, platform: 'QQ', accountMasked: '105*****64', amount: 5.2, time: '2025/6/13 19:46' },
  { id: 3, platform: 'QQ', accountMasked: '105*****64', amount: 20.0, time: '2025/7/12 17:24' },
  { id: 4, platform: 'QQ', accountMasked: '253*****16', amount: 5.2, time: '2025/8/21 13:57' },
  { id: 5, platform: 'QQ', accountMasked: '321*****91', amount: 68.0, time: '2025/8/25 9:59' },
  { id: 6, platform: 'QQ', accountMasked: '105*****66', amount: 10.0, time: '2025/9/24 16:47' },
  { id: 7, platform: 'QQ', accountMasked: '272****23', amount: 50.0, time: '2026/3/24 16:38' },
  { id: 8, platform: 'QQ', accountMasked: '240*****08', amount: 50.0, time: '2026/4/14 21:45' },
]
