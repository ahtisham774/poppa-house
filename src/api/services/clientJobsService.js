import apiClient from "../apiClient"

const clientJobsService = {
    async getClientJobs(clientId) {
        return await apiClient.get(`client/jobManagement/getJobs/${clientId}`, {
            requireAuth: true
        })
    }
}


export default clientJobsService