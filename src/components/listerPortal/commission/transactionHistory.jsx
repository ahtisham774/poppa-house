import { Select } from "antd"
import { useState } from "react"
import CardContainer from "./cardContainer"
import CardHeader from "./cardHeader"

export const ShowStatus = ({ status }) => {
  let className = 'text-base font-medium px-6 py-1 rounded-lg border border-[#B1B1B1] '
  switch (status) {
    case 'Paid':
      className += 'bg-[#DFF5E6] text-[#166534]'
      break
    case 'Pending':
      className += 'bg-[#FEF9C3] text-[#92400E]'
      break
    case 'Overdue':
      className += 'bg-[#FFD3CB] text-[#D50000]'
      break
    case 'Disputed':
      className += 'bg-[#EFF6FF] text-[#2B4BB4]'
      break
    default:
      className
      break
  }
  return <span className={className}>{status}</span>
}

const TransactionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const history = [
    {
      id: 123456,
      date: '2023-10-01',
      type: 'For Rent',
      final_price: 450000.0,
      commission_percentage: 1.25,
      status: 'Paid'
    },
    {
      id: 123457,
      date: '2023-10-02',
      type: 'For Rent',
      final_price: 350000.0,
      commission_percentage: 1.25,
      status: 'Pending'
    },
    {
      id: 123458,
      date: '2023-10-03',
      type: 'For Rent',
      final_price: 250000.0,
      commission_percentage: 1.25,
      status: 'Overdue'
    },
    {
      id: 123459,
      date: '2023-10-04',
      type: 'For Rent',
      final_price: 150000.0,
      commission_percentage: 1.25,
      status: 'Disputed'
    },
    {
      id: 123460,
      date: '2023-10-05',
      type: 'For Rent',
      final_price: 550000.0,
      commission_percentage: 1.25,
      status: 'Paid'
    },
    {
      id: 123461,
      date: '2023-10-06',
      type: 'For Rent',
      final_price: 650000.0,
      commission_percentage: 1.25,
      status: 'Pending'
    }
  ];

  // Pagination calculations
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = history.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(history.length / rowsPerPage);

  const handleDownload = row => {
    console.log('Download invoice for transaction:', row.id)
  }

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Date', accessor: 'date' },
    { header: 'Type', accessor: 'type' },
    { 
      header: 'Final Price', 
      accessor: 'final_price',
      render: row => `£${row.final_price.toLocaleString()}`
    },
    { 
      header: 'Commission %', 
      accessor: 'commission_percentage',
      render: row => `${row.commission_percentage}%`
    },
    {
      header: 'Status',
      accessor: 'status',
      render: row => <ShowStatus status={row.status} />
    },
    {
      header: 'Actions',
      accessor: 'actions',
      render: row => (
        <div className='flex items-center gap-2'>
          <button
            onClick={() => handleDownload(row)}
            className='text-[#254EF0] font-medium flex items-center gap-1'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 14L5 9L6.4 7.55L9 10.15V2H11V10.15L13.6 7.55L15 9L10 14ZM2 18V13H4V16H16V13H18V18H2Z'
                fill='#254EF0'
              />
            </svg>
            Invoice
          </button>
        </div>
      )
    }
  ]

  return (
    <CardContainer>
      <CardHeader >
        Transaction History
      </CardHeader>
      
      <div className='overflow-hidden rounded-lg border border-[#D9D9D9]'>
        <table className='min-w-full'>
          <thead className='bg-[#FAFAFA]'>
            <tr>
              {columns.map((col, colIndex) => (
                <th
                  key={col.accessor}
                  className={`p-6 text-lg font-semibold text-[#454545] text-center border border-[#D9D9D9] 
                    ${colIndex === 0 ? 'rounded-tl-lg' : ''}
                    ${colIndex === columns.length - 1 ? 'rounded-tr-lg' : ''}
                  `}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-white'>
            {currentRows.map((row, rowIndex) => (
              <tr key={row.id}>
                {columns.map((col, colIndex) => (
                  <td
                    key={col.accessor}
                    className={`p-6 whitespace-nowrap text-base text-center font-medium border border-[#D9D9D9] text-[#131E47]
                      ${rowIndex === currentRows.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''}
                      ${rowIndex === currentRows.length - 1 && colIndex === columns.length - 1 ? 'rounded-br-lg' : ''}
                    `}
                  >
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700">Rows per page:</span>
          <Select
            value={rowsPerPage}
            onChange={(value) => {
              setRowsPerPage(Number(value));
              setCurrentPage(1);
            }}
            className="text-sm"
          >
            {[5, 10, 25, 50].map((size) => (
              <Select.Option key={size} value={size}>
                {size}
              </Select.Option>
            ))}
          </Select>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">
            {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, history.length)} of {history.length}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Previous
          </button>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </CardContainer>
  )
}

export default TransactionHistory