import { defineStore } from "pinia";
import { uid } from "uid";
import {reactive} from 'vue';

//  = internationalization
// + Current Languages: en, es

export const useLayout1Store = defineStore("layout1", {
  state: () => {
    const i18n = {
      pageTitle: {
        en: "Resume Builder",
        es: "Generador de CV",
      },
      characterCount: {
        en: "characters",
        es: "caracteres",
      },
      confirm:{
        en: "Confirm",
        es: "Confirmar"
      },
      cancel: {
        en: "Cancel",
        es: "Cancelar"
      },
      head: {
        Title: {
          en: "I am",
          es: "Yo soy"
        },
        Description: {
          en: "Tell recruiters your name and your title!",
          es: "¡Dile a los reclutadores tu nombre y tu título!"
        },
        Name: {
          label: {
            en: "Your Name",
            es: "Tu Nombre",
          },
          placeholder: {
            en: "Name",
            es: "Nombre",
          },
        },
        Position: {
          label: {
            en: "Position",
            es: "Posición",
          },
          placeholder: {
            en: "Position",
            es: "Posición",
          },
        },
      },
      profileInfo: {
        Title: {
          en: "Profile Info",
          es: "Información de perfil",
        },
        Description: {
          en: "Tell recruiters about you! Let yourself shine.",
          es: "¡Cuéntale a los reclutadores sobre ti! Déjate brillar.",
        },
      },
      jobExperience: {
        Title: {
          en: "Job Experience",
          es: "Experiencia de trabajo",
        },
        Description: {
          en: "Tell recruiters about your experience!",
          es: "¡Cuéntale a los reclutadores tu experiencia!",
        },
        Position: {
          label: {
            en: "Job Position",
            es: "Puesto de trabajo",
          },
          placeholder: {
            en: "Title",
            es: "Título",
          },
        },
        Working: {
          label: {
            en: "Currently working",
            es: "Actualmente trabajando",
          },
          placeholder: {
            en: "Currently working",
            es: "Actualmente trabajando",
          },
        },
        Remote: {
          label: {
            en: "Remote",
            es: "Remoto",
          },
          placeholder: {
            en: "Remote",
            es: "Remoto",
          },
        },
        Employer: {
          label: {
            en: "Employer",
            es: "Empleador",
          },
          placeholder: {
            en: "Employer",
            es: "Empleador",
          },
        },
        City: {
          label: {
            en: "City",
            es: "Ciudad",
          },
          placeholder: {
            en: "Your city",
            es: "Tu ciudad",
          },
        },
        Country: {
          label: {
            en: "Country",
            es: "País",
          },
          placeholder: {
            en: "Your country",
            es: "Tu país",
          },
        },
        PositionType: {
          label: {
            en: "Position Type",
            es: "Tipo de posición",
          },
          placeholder: {
            en: "Remote, on site",
            es: "Remoto, en sitio",
          },
        },
        DateWorking: {
          en: "Current",
          es: "Actualidad",
        },
        StartDate: {
          label: {
            en: "Start Date",
            es: "Fecha de Inicio",
          },
          placeholder: {
            en: "Since",
            es: "Desde",
          },
        },
        FinishDate: {
          label: {
            en: "Finish Date",
            es: "Fecha Final",
          },
          placeholder: {
            en: "To",
            es: "Hasta",
          },
        },
        ExperienceDescription: {
          en: "Short description.",
          es: "Breve descripción.",
        },
        Tasks: {
          en: "Task",
          es: "Labor",
        },
        BtnAddMore: {
          en: "Add One More Experience",
          es: "Añade Otra Experiencia",
        },
        BtnAddMoreFirstTime: {
          en: "Add a Experience",
          es: "Añade una Experiencia",
        },
        Empty: {
          en: "Tell recruiters about your job experience!",
          es: "¡Cuéntale a los reclutadores sobre tu experiencia laboral!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      },
      educationHistory: {
        Title: {
          en: "Education",
          es: "Educación",
        },
        Description: {
          en: "Show recruiters your education history!",
          es: "¡Muestre a los reclutadores su historial educativo!",
        },
        EducationTitle: {
          label: {
            en: "Career Title, Course Title ...",
            es: "Título de la carrera, Título del curso...",
          },
          placeholder: {
            en: "E.g. Software Development",
            es: "P.ej. Desarrollo de software",
          },
        },
        EducationInstitute: {
          label: {
            en: "Institute, University, Organization ...",
            es: "Instituto, Universidad, Organización...",
          },
          placeholder: {
            en: "E.g. Greatest University Ever",
            es: "P.ej. La mejor universidad de todos los tiempos",
          },
        },
        EducationStartDate: {
          label: {
            en: "Start Date",
            es: "Fecha de Inicio",
          },
          placeholder: {
            en: "Since",
            es: "Desde",
          },
        },
        EducationFinishDate: {
          label: {
            en: "Finish Date",
            es: "Fecha de Final",
          },
          placeholder: {
            en: "To",
            es: "Hasta",
          },
        },
        BtnAddMore: {
          en: "Add More",
          es: "Añade Otro",
        },
        BtnAddMoreFirstTime: {
          en: "Add One",
          es: "Añade Una",
        },
        Empty: {
          en: "Tell recruiters about your education history!",
          es: "¡Cuéntale a los reclutadores sobre tu historial educativo!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      },
      technicalSkills: {
        Title: {
          en: "Technical Skills",
          es: "Habilidades Técnicas",
        },
        Description: {
          en: "Show recruiters your technical skills!",
          es: "¡Muestre a los reclutadores sus habilidades técnicas!",
        },
        Skill: {
          labelSkill: {
            en: "Your skill",
            es: "Habilidad",
          },
          placeholderSkill: {
            en: "E.g. problem solving ...",
            es: "P.ej. resolución de problemas...",
          },
          labelDetail: {
            en: "Describe the skill",
            es: "Describir la habilidad",
          },
          placeholderDetail: {
            en: "Skill detail ...",
            es: "Detalle de habilidad...",
          },
        },
        BtnAddMore: {
          en: "Add More Skills",
          es: "Añade Otra Habilidad",
        },
        BtnAddMoreFirstTime: {
          en: "Add a Skills",
          es: "Añade una Habilidad",
        },
        Empty: {
          en: "Add a technical skill!",
          es: "¡Agrega una habilidad técnica!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      },
      personalSkills: {
        Title: {
          en: "Personal Skills",
          es: "Habilidades Personales",
        },
        Skill: {
          label: {
            en: "Your skill",
            es: "Habilidad",
          },
          placeholder: {
            en: "E.g. Critical thinking ...",
            es: "P.ej. Pensamiento crítico ...",
          },
        },
        Description: {
          en: "Add your personal skills! Recruiters will love it.",
          es: "¡Agrega tus habilidades personales! A los reclutadores les encantará.",
        },
        BtnAddMore: {
          en: "Add Another Skill",
          es: "Añade Otra habilidad",
        },
        BtnAddMoreFirstTime: {
          en: "Add a Skills",
          es: "Añade una habilidad",
        },
        Empty: {
          en: "Add a skill!",
          es: "¡Añade una habilidad!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      },
      certifications: {
        Title: {
          en: "Certifications",
          es: "Certificaciones",
        },
        label: {
          en: "certification",
          es: "certificación",
        },
        placeholder: {
          en: "Certified in ASP.NET Core ...",
          es: "Certificado(a) en ASP.NET Core ...",
        },
        Description: {
          en: "Let recruiters know about your certifications!",
          es: "¡Deja que los reclutadores sepan de tus certificaciones!",
        },
        BtnAddMore: {
          en: "Add another certification",
          es: "Agregar otra certificación",
        },
        BtnAddMoreFirstTime: {
          en: "Add a certification",
          es: "Añade una certificación",
        },
        Empty: {
          en: "Add your first certification!",
          es: "¡Añade tu primera certificación!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      },
      hobbies: {
        Title: {
          en: "Hobbies",
          es: "Pasatiempos",
        },
        Description: {
          en: "Describe your hobbies",
          es: "Describe tus pasatiempos",
        },
        Add: {
          en: "Add your hobbies (Optional)",
          es: "Añade tus pasatiempos (opcional)",
        },
        Hobby: {
          label: {
            en: "Your hobby",
            es: "Hobby",
          },
          placeholder: {
            en: "E.g. Reading ...",
            es: "P.ej. Lectura ...",
          },
        },
        BtnAddMore: {
          en: "Add Another Hobby",
          es: "Añade Otro Pasatiempo",
        },
        BtnAddMoreFirstTime: {
          en: "Add a Hobby",
          es: "Añade un Pasatiempo",
        },
        Empty: {
          en: "Tell recruiters about your hobbies!",
          es: "¡Dile a los reclutadores sobre tus aficiones!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      },
      personalProjects: {
        Title: {
          en: "Personal Projects",
          es: "Proyectos Personales",
        },
        Description: {
          en: "Show recruiters your Personal Projects!",
          es: "¡Muestra a los reclutadores tus proyectos personales!",
        },
        Add: {
          en: "Add your personal projects (Optional)",
          es: "Añade tus proyectos personales (Opcional)",
        },
        ProjectName: {
          label: {
            en: "Project Name",
            es: "Nombre del proyecto",
          },
          placeholder: {
            en: "E.g. Software Development",
            es: "P.ej. Desarrollo de software",
          },
        },
        ShortDescription: {
          label: {
            en: "Short description",
            es: "Descripción corta",
          },
          placeholder: {
            en: "Project description",
            es: "Descripción del Proyecto",
          },
        },
        Repository: {
          name: {
            label: {
              en: "Repository Name",
              es: "Nombre del repositorio",
            },
            placeholder: {
              en: "Repository name",
              es: "Nombre del repositorio",
            },
          },
          link: {
            label: {
              en: "Repository Link",
              es: "Link del repositorio",
            },
            placeholder: {
              en: "GitHub, GitLab ...",
              es: "GitHub, GitLab ...",
            },
          },
        },
        Website: {
          name: {
            label: {
              en: "Website",
              es: "Nombre del site",
            },
            placeholder: {
              en: "Website",
              es: "Nombre del site",
            },
          },
          link: {
            label: {
              en: "Website Link",
              es: "Link del site",
            },
            placeholder: {
              en: "Netlify, Vercel ....",
              es: "Netlify, Vercel ....",
            },
          },
        },
        BtnAddMore: {
          en: "Add Another Project",
          es: "Añade Otro Proyecto",
        },
        BtnAddMoreFirstTime: {
          en: "Add a Project",
          es: "Añade un Proyecto",
        },
        Empty: {
          en: "Tell recruiters about your personal skills!",
          es: "¡Cuéntale a los reclutadores sobre tus habilidades personales!",
        },
        ConfirmationButton: {
          title: {
            en: "Are you sure you want to delete this?",
            es: "¿Estás seguro(a) de que quieres eliminar esto?",
          },
          confirm: {
            en: "Confirm",
            es: "Confirmar",
          },
          cancel: {
            en: "Cancel",
            es: "Cancelar",
          },
        },
      }
    }

    const head = reactive({
      id: "head-section",
      label: "head-section",
      content: [
        {
          id: uid(),
          label: "head",
          name: "",
          position: "",
          confirmDelete: false,
          isFolded: true,
        }
      ],
      icon: "fluent-emoji-high-contrast:memo",
      isFolded: true,
      i18n: i18n.head
    })

    const profileInfo = reactive({
      id: "profile-info-section",
      label: "profile-info-section",
      content: [{
        id: uid(),
        label: "profile-info",
        profileInfo: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "iconoir:profile-circle",
      isFolded: true,
      i18n: i18n.profileInfo
    })

    const jobExperience = reactive({
      id: "job-experience-section",
      label: "job-experience-section",
      content: [{
        id: uid(),
        label: "job-experience",
        position: "",
        description: "",
        employer: "",
        city: "",
        country: "",
        startDate: "",
        finishDate: "",
        confirmDelete: false,
        isFolded: true,
        isRemote: false,
        isWorking: false,
        tasks: [
          {
            id: uid(),
            label: "job-experience-task",
            task: "",
            confirmDelete: false,
            isFolded: true,
          },
        ],
      }],
      icon: "teenyicons:bulb-on-outline",
      isFolded: true,
      i18n: i18n.jobExperience

    })

    const educationHistory = reactive({
      id: "education-history-section",
      label: "education-history-section",
      content: [{
        id: uid(),
        label: "education-history",
        title: "",
        institute: "",
        startDate: "",
        finishDate: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "file-icons:docz",
      isFolded: true,
      i18n: i18n.educationHistory
    })

    const technicalSkills = reactive({
      id: "technical-skills-section",
      label: "technical-skills-section",
      content: [{
        id: uid(),
        label: "technical-skills",
        skill: "",
        detail: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "ri:sound-module-line",
      isFolded: true,
      i18n: i18n.technicalSkills
    })

    const personalSkills = reactive({
      id: "personal-skills-section",
      label: "personal-skills-section",
      content: [{
        id: uid(),
        label: "personal-skills",
        skill: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "bi:person-check",
      isFolded: true,
      i18n: i18n.personalSkills
    })

    const certifications = reactive({
      id: "certifications-section",
      label: "certifications-section",
      content: [{
        id: uid(),
        label: "certifications",
        certification: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "carbon:course",
      isFolded: true,
      i18n: i18n.certifications
    })

    const hobbies = reactive({
      id: "hobbies-section",
      label: "hobbies-section",
      content: [{
        id: uid(),
        label: "hobbies",
        hobby: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "streamline:travel-places-theater-mask-hobby-theater-masks-drama-event-show-entertainment",
      isFolded: true,
      i18n: i18n.hobbies
    })

    const personalProjects = reactive({
      id: "personal-projects-section",
      label: "personal-projects-section",
      content: [{
        id: uid(),
        label: "personal-projects",
        tittle: "",
        description: "",
        repositoryLink: "",
        websiteLink: "",
        confirmDelete: false,
        isFolded: true,
      }],
      icon: "ph:suitcase-simple-duotone",
      isFolded: true,
      i18n: i18n.personalProjects
    })

    return {
      head,
      profileInfo,
      jobExperience,
      educationHistory,
      technicalSkills,
      personalSkills,
      certifications,
      hobbies,
      personalProjects,
      i18n,
      resume: [
        head,
        profileInfo,
        jobExperience,
        educationHistory,
        technicalSkills,
        personalSkills,
        certifications,
        hobbies,
        personalProjects,
      ],
    };
  },
  actions: {
    // BEGIN CREATE
    addProfileInfo() {
      this.resume
        .find((section) => section.id == "profile-info-section")
        .content.push({
          id: uid(),
          label: "profile-info",
          profileInfo: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addJobExperience() {
      this.resume
        .find((section) => section.id == "job-experience-section")
        .content.push({
          id: uid(),
          label: "job-experience",
          position: "",
          description: "",
          employer: "",
          city: "",
          country: "",
          startDate: "",
          finishDate: "",
          confirmDelete: false,
          isFolded: true,
          isRemote: false,
          isWorking: false,
          tasks: [
            {
              id: uid(),
              label: "job-experience-task",
              task: "",
              confirmDelete: false,
              isFolded: true,
            },
          ],
        });
    },
    addJobExperienceTask(experienceId) {
      this.resume
        .find((section) => section.id == "job-experience-section")
        .content.find((experience) => experience.id == experienceId).tasks.push({
          id: uid(),
          label: "personal-skills",
          skill: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addEducationHistory() {
      this.resume
        .find((section) => section.id == "education-history-section")
        .content.push({
          id: uid(),
          label: "education-history",
          title: "",
          institute: "",
          startDate: "",
          finishDate: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addTechnicalSkills() {
      this.resume
        .find((section) => section.id == "technical-skills-section")
        .content.push({
          id: uid(),
          label: "technical-skills",
          skill: "",
          detail: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addPersonalSkills() {
      this.resume
        .find((section) => section.id == "personal-skills-section")
        .content.push({
          id: uid(),
          label: "personal-skills",
          skill: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addCertifications() {
      this.resume
        .find((section) => section.id == "certifications-section")
        .content.push({
          id: uid(),
          label: "certifications",
          certification: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addHobbies() {
      this.resume
        .find((section) => section.id == "hobbies-section")
        .content.push({
          id: uid(),
          label: "hobbies",
          hobby: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    addPersonalProjects() {
      this.resume
        .find((section) => section.id == "personal-projects-section")
        .content.push({
          id: uid(),
          label: "personal-projects",
          tittle: "",
          description: "",
          repositoryLink: "",
          websiteLink: "",
          confirmDelete: false,
          isFolded: true,
        });
    },
    // END CREATE

    // BEGIN READ
    getSection(label) {
      return this.resume.find((section) => section.label == label);
    },
    // END READ

    // BEGIN DELETE
    deleteSectionItem(sectionId, itemId) {
      const item = this.resume.find(
        (section) => section.id == sectionId
      ).content;
      item.splice(item.indexOf(item.find((item) => item.id == itemId)), 1);
    },
    deleteJobExperienceTask(experienceId){
      const item = this.resume.find((section) => section.id == "job-experience-section").content.find((experience) => experience.id == experienceId).tasks
      item.splice(item.indexOf(item.find(item => item.id == experienceId)), 1);
    }
    // END DELETE
  },
});
