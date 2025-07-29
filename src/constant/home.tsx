import { Brain, Cpu, Hammer, Sparkles } from "lucide-react"
import socialLinkProfile from "@/assets/home/social-link-profile.png"
import QRCodeComponent from "@/assets/home/QR-code-component.png"

export const challenges = {
    Newbie: [
        {
            id: 1,
            title: "Social links profile",
            description: "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!",
            image: socialLinkProfile,
            liveUrl: "/easy/social-link-profile",
            githubUrl: "https://github.com/mdnazril/frontendMentor/tree/main/src/app/easy/social-link-profile",
        },
        {
            id: 2,
            title: "QR code component",
            description: "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
            image: QRCodeComponent,
            liveUrl: "/easy/QR-code-component",
            githubUrl: "https://github.com/mdnazril/frontendMentor/tree/main/src/app/easy/QR-code-component",
        }
    ],
    Junior: [
        // {
        //     id: 1,
        //     title: "Age Calculator App",
        //     description: "This challenge is designed to sharpen your JavaScript and form validation skills. Working with dates in JavaScript can be tricky, so this will be a nice test!",
        //     image: QRCodeComponent,
        //     liveUrl: "/junior/age-calculator-app",
        //     githubUrl: "https://github.com/mdnazril/frontendMentor/tree/main/src/app/junior/age-calculator-app",
        //     inProgress: true
        // }
    ],
    Intermediate: [],
    Advanced: [],
}

export const levels = {
    newbie: {
        title: "Newbie",
        description: "Eager to learn, just getting hands dirty with real-world code.",
        color: "bg-sky-300 text-sky-900 border-sky-200",
        icon: <Sparkles className="w-6 h-6" />,
    },
    junior: {
        title: "Junior",
        description: "Fresh to the game, wide-eyed and full of curiosity.",
        color: "bg-lime-400 text-lime-900 border-lime-200",
        icon: <Hammer className="w-6 h-6" />,
    },
    intermediate: {
        title: "Intermediate",
        description: "Comfortable in the code, solving problems with growing confidence.",
        color: "bg-amber-500 text-amber-900 border-amber-200",
        icon: <Cpu className="w-6 h-6" />,
    },
    advanced: {
        title: "Advanced",
        description: "Code whisperer, turning complex problems into clean solutions.",
        color: "bg-indigo-600 text-white border-indigo-200",
        icon: <Brain className="w-6 h-6" />,
    }
}