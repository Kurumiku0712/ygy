export const SKILLS = [
    {
        title: "Frontend",
        icon: "./assets/images/frontend-icon.png",
        skills: [
            { skill: "React.js", percentage: "70%" },
            { skill: "Vue.js", percentage: "70%" },
            { skill: "HTML5", percentage: "85%" },
            { skill: "CSS3", percentage: "75%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "TypeScript", percentage: "60%" },

        ],
    },

    {
        title: "Backend",
        icon: "./assets/images/backend-icon.png",
        skills: [
            { skill: "SpringBoot", percentage: "85%" },
            { skill: "Django", percentage: "80%" },
            { skill: "Node.js", percentage: "70%" },
            { skill: "Java", percentage: "85%" },
            { skill: "C#", percentage: "75%" },
        ],
    },

    {
        title: "Tools",
        icon: "./assets/images/tools-icon.png",
        skills: [
            { skill: "Git & Github", percentage: "80%" },
            { skill: "Visual Studio Code", percentage: "80%" },
            { skill: "Pycharm", percentage: "85%" },
            { skill: "IntelliJ IDEA", percentage: "85%" },
            { skill: "Unity", percentage: "85%" },
        ],
    },

    {
        title: "Soft Skills",
        icon: "./assets/images/skills-icon.png",
        skills: [
            { skill: "Problem-solving", percentage: "85%" },
            { skill: "Team Collaboration", percentage: "80%" },
            { skill: "Adaptability", percentage: "85%" },
            { skill: "Critical thinking", percentage: "75%" },
            { skill: "Creativity ", percentage: "80%" },
        ],
    },

]

export const WORK_EXPERIENCE = [

    {
        title: "次元体验馆",
        date: "2024年7月 - 2024年9月",
        responsibilities: [
            "开发次元体验馆虚拟订房系统，提供基于AI的个性化虚拟聊天机器人服务，支持用户通过生成的虚拟对象进行互动交流，并提供订房管理、订单搜索和虚拟影院等功能。通过MongoDB迁移、Stable Diffusion风格化头像生成及Google reCAPTCHA提升系统安全性和数据处理效率",
            "相关技能: Spring Boot, React, MongoDB, OpenAI API, Stable Diffusion, AWS S3, TMDB API",
            "GitHub地址: https://github.com/Kurumiku0712/fantasy-inn",
            "演示视频链接: https://drive.google.com/file/d/15vCsdHe3SlKA0T6ZmvEg-KwqPapMK88P/view?usp=sharing"
        ],
    },

    {
        title: "德语转录平台",
        date: "2024年2月 - 2024年6月",
        responsibilities: [
            "该平台支持德语音乐教师和学生进行发音练习，自动生成国际音标（IPA），提供多格式输入、音频播放、发帖分享及会员订阅等功能。项目采用 敏捷开发 和 Spring Boot 重构后端，集成了 Spring Security 和 JWT 进行鉴权，支持第三方登录（OAuth 2.0）。优化系统性能，通过 MySQL 查询和索引设计提升热门内容筛选效率，并通过 PDFBox 实现多格式文件的解析和数据提取",
            "相关技能: Spring Boot, Spring Security, JWT, OAuth 2.0, MySQL, PDFBox, IBM Text-to-Speech API, React"
        ],
    },

    {
        title: "Mini Game 开发实习生",
        date: "2021年5月 - 2021年7月",
        responsibilities: [
            "在Unity平台开发 2D roguelike 游戏，负责团队的任务分配和项目进度管理，参与脚本、艺术设计和战斗机制的实现。通过A*算法优化敌人AI路径，并提升场景加载效率和屏幕稳定性",
            "相关技能: Unity, C#, 项目管理, 游戏设计",
            "GitHub地址: https://github.com/Kurumiku0712/Anesidora-MiniGame",
            "演示视频链接: https://drive.google.com/file/d/1Gvk1vCgDrKr9t8bSBNAH-B2wg2uDd_5OZ/view?usp=sharing"
        ],
    },

    {
        title: "研究助理",
        date: "2021年5月 - 2022年4月",
        responsibilities: [
            "研究教育游戏和计算机图形学，负责角色和场景建模，设计动画系统，并在教育游戏中应用矩阵变换谜题，帮助用户学习计算机图形学概念",
            "相关技能: 计算机图形学, OpenGL, WebGL, Blender"
        ],
    },


    {
        title: "个人博客",
        date: "2024年2月 - 2024年7月",
        responsibilities: [
            "开发个人博客网站，提供发布、搜索和分类功能，支持用户身份验证和会话管理",
            "相关技能: Django, Bootstrap, MySQL, PythonAnywhere",
            "网址: https://kurumiku.pythonanywhere.com/"
        ],
    },

    {
        title: "VR社团互动平台",
        date: "2022年1月 - 2022年7月",
        responsibilities: [
            "开发虚拟俱乐部互动平台，提供沉浸式VR体验和真实的活动场景互动，项目获得优秀毕业设计提名",
            "SteamVR, VRTK, HTC Vive, VR开发",
            "GitHub地址: https://github.com/Kurumiku0712/VR-Clubs"
        ],
    },

    {
        title: "Recorder APP",
        date: "2020年9月 - 2020年12月",
        responsibilities: [
            "开发一款名为“Recorder”的Android应用，记录个人生活，并获得计算机软件著作权证书",
        ],
    },

]