import { applications } from "../../../../Data/applications"



export default function handler (req, res){
    res.status(200).json(applications)
}