import { useEffect, useState } from "react"

const useTeachers = email => {
    const [isTeacher, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://rose-gurrden-server-bnexttechitc-gmailcom.vercel.app/users/teacher/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isTeacher);
                    setIsAdminLoading(false);
                })
    }
    }, [email])
    return [isTeacher, isAdminLoading]
}

export default useTeachers;