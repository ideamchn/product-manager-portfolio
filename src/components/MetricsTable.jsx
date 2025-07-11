import React from 'react'

const MetricsTable = ({ data }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'P0': return 'bg-red-100 text-red-800'
      case 'P1': return 'bg-orange-100 text-orange-800'
      case 'P2': return 'bg-yellow-100 text-yellow-800'
      case 'P3': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feature
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reach
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Impact
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Confidence
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Effort
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              RICE Score
            </th>
            <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {row.feature}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 text-center">
                  {row.reach}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 text-center">
                  {row.impact}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 text-center">
                  {row.confidence}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 text-center">
                  {row.effort}
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900 text-center">
                  {row.riceScore}
                </td>
                <td className="px-4 py-3 text-center">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(row.priority)}`}>
                  {row.priority}
                </span>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  )
}

export default MetricsTable
