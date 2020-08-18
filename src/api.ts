import axios from "axios";

interface Pageview {
    id: string
    created_at: Date
  
    page: {
      title: string
      description: string
      tags: string[]
    }
  
    user: {
      id: string
      created_at: Date
    }
  }

const persistPageView = (pageView: Pageview) => {
     axios.post('http://localhost:8081/pageviews', pageView)
}

export {persistPageView};