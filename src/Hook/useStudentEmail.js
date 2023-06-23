import { useEffect, useState } from "react"

const useStudent = email => {
    const [isStudentEmail, setIsStudent] = useState();
    
    useEffect(() => {
        if (email) {
            fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/admissions/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsStudent(data.isStudent);
                    
                })
    }
    }, [email])
    return [isStudentEmail]
}

export default useStudent;