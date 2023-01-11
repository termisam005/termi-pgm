import DemoLogin from "./ui-kit/DemoLogin";
import DemoMain from "./ui-kit/DemoMain";
import KitButton from "./ui-kit/KitButton";
import KitForm from "./ui-kit/KitForm";
import KitProfile from "./ui-kit/KitProfile";
import KitPopup from "./ui-kit/KitPopup";
import KitEx1 from "./ui-kit/KitEx1";
import KitEx2 from "./ui-kit/KitEx2";
import KitEx3 from "./ui-kit/KitEx3";
import ProfilePanel from "./ui-kit/ProfilePanel";
import KitAddPop from "./ui-kit/KitAddPop";
import KitEvalPop from "./ui-kit/KitEvalPop";
import KitAutoPop from "./ui-kit/KitAutoPop";
import KitSetProfile from "./ui-kit/KitSetProfile";
import KitEditProfile from "./ui-kit/KitEditProfile";
import KitSplit from "./ui-kit/KitSplit";

import Index from "./pages/Index";
import Login1 from "./pages/login/Login1";
import Login2 from "./pages/login/Login2";
import Login3 from "./pages/login/Login3";
import CookieMan from "./pages/login/CookieMan";
import NewProfile from "./pages/login/NewProfile";
import SelectRoles1 from "./pages/account/SelectRoles1";
import SelectRoles2 from "./pages/account/SelectRoles2";
import SelectRoles3 from "./pages/account/SelectRoles3";
import SelectRoles4 from "./pages/account/SelectRoles4";
import ResetPw from "./pages/account/ResetPw";
import UpdatePw from "./pages/account/UpdatePw";
import Signup1 from "./pages/signup/Signup1";
import Signup2 from "./pages/signup/Signup2";
import SignAgree from "./pages/signup/SignAgree";
import CreateOff1 from "./pages/signup/CreateOff1";
import CreateOff2 from "./pages/signup/CreateOff2";
import CreateOff3 from "./pages/signup/CreateOff3";
import CreateOff4 from "./pages/signup/CreateOff4";
import SongDetail from "./pages/project/SongDetail";
import MainNotVerified from "./pages/Main/MainNotVerified";
import MainDashboard from "./pages/Main/MainDashboard";
import VerProfile1 from "./pages/Main/VerProfile1";
import VerProfile2 from "./pages/Main/VerProfile2";
import VerProfile3 from "./pages/Main/VerProfile3";
import MainVisitHome from "./pages/Main/MainVisitHome";
import RecommendCreator from "./pages/list/RecommendCreator";
import RecommendProject from "./pages/list/RecommendProject";
import Connect from "./pages/list/Connect";
import CreateProject1 from "./pages/project/CreateProject1";
import CreateProject2 from "./pages/project/CreateProject2";
import CreateProject3 from "./pages/project/CreateProject3";
import CreateProject4 from "./pages/project/CreateProject4";
import CreateProject5 from "./pages/project/CreateProject5";
import ProjectDetailHome from "./pages/project/ProjectDetailHome";
import ProjectDetailSongs from "./pages/project/ProjectDetailSongs";
import ProjectDetailRefer from "./pages/project/ProjectDetailRefer";
import ProjectDetailWriter from "./pages/project/ProjectDetailWriter";
import RsvpInfo from "./pages/project/RsvpInfo";
import NewSong1 from "./pages/project/NewSong1";
import NewSong2 from "./pages/project/NewSong2";
import NewSong3 from "./pages/project/NewSong3";
import SongLyrics from "./pages/song/SongLyrics";
import SongPitchList from "./pages/song/SongPitchList";
import SongPitchSong from "./pages/song/SongPitchSong";
import SongPitchResult from "./pages/song/SongPitchResult";
import SongPitchWriter from "./pages/song/SongPitchWriter";
import SetEval1 from "./pages/a&r/SetEval1";
import SetEval2 from "./pages/a&r/SetEval2";
import SetEval3 from "./pages/a&r/SetEval3";
import AnrDashboard from "./pages/a&r/AnrDashboard";
import AnrVisit from "./pages/a&r/AnrVisit";
import AnrPitchRecomm from "./pages/a&r/AnrPitchRecomm";
import AnrPitchDetail from "./pages/a&r/AnrPitchDetail";
import AnrEval from "./pages/a&r/AnrEval";
import AnrEvalDetail from "./pages/a&r/AnrEvalDetail";
import AnrRevalDetail from "./pages/a&r/AnrRevalDetail";
import NewPitch1 from "./pages/song/NewPitch1";
import NewPitch2 from "./pages/song/NewPitch2";
import NewPitch3 from "./pages/song/NewPitch3";
import NewPitch4 from "./pages/song/NewPitch4";
import DetailPitch from "./pages/song/DetailPitch";
import DetailSong from "./pages/song/DetailSong";
import CreateProfile1 from "./pages/profile/CreateProfile1";
import CreateProfile2 from "./pages/profile/CreateProfile2";
import CreateProfile3 from "./pages/profile/CreateProfile3";
import CreateProfile4 from "./pages/profile/CreateProfile4";
import SettingsAccount from "./pages/profile/SettingsAccount";
import SettingsAvail from "./pages/profile/SettingsAvail";
import SettingsProfile from "./pages/profile/SettingsProfile";
import SettingsID from "./pages/profile/SettingsID";
import CompanyHome from "./pages/company/CompanyHome";
import CompanyRos from "./pages/company/CompanyRos";
import CompanyPart from "./pages/company/CompanyPart";
import BoardNews from "./pages/board/BoardNews";
import BoardNewsDetail from "./pages/board/BoardNewsDetail";
import BoardFaq from "./pages/board/BoardFaq";
import BoardFaqDetail from "./pages/board/BoardFaqDetail";
import SongTest from "./pages/song/SongTest";
import SongPitchTest1 from "./pages/song/SongPitchTest1";
import LabelCopy from "./pages/label/LabelCopy";
import LabelCopyCopy from "./pages/label/LabelCopyCopy";
import CopySongDetail from "./pages/label/CopySongDetail";
import LabelCopyAlbum from "./pages/label/LabelCopyAlbum";
import LabelCopyDetail from "./pages/label/LabelCopyDetail";
import LabelAlbum from "./pages/label/LabelAlbum";
import NewAlbum1 from "./pages/label/NewAlbum1";
import NewAlbum2 from "./pages/label/NewAlbum2";
import DetailLabel from "./pages/label/DetailLabel";
import AdaptVersion from "./pages/label/AdaptVersion";
import AdapTation from "./pages/label/AdapTation";
import CreditSongDetail from "./pages/label/CreditSongDetail";


export default [
    {
        path: '/',
        component: Index
    },
    {
        path: '/Login1',
        component: Login1
    },
    {
        path: '/Login2',
        component: Login2
    },
    {
        path: '/Login3',
        component: Login3
    },
    {
        path: '/CookieMan',
        component: CookieMan
    },
    {
        path: '/ResetPw',
        component: ResetPw
    },
    {
        path: '/UpdatePw',
        component: UpdatePw
    },
    {
        path: '/Signup1',
        component: Signup1
    },
    {
        path: '/Signup2',
        component: Signup2
    },
    {
        path: '/SignAgree',
        component: SignAgree
    },
    {
        path: '/NewProfile',
        component: NewProfile
    },
    {
        path: '/SelectRoles1',
        component: SelectRoles1
    },
    {
        path: '/SelectRoles2',
        component: SelectRoles2
    },
    {
        path: '/SelectRoles3',
        component: SelectRoles3
    },
    {
        path: '/SelectRoles4',
        component: SelectRoles4
    },
    {
        path: '/CreateOff1',
        component: CreateOff1
    },
    {
        path: '/CreateOff2',
        component: CreateOff2
    },
    {
        path: '/CreateOff3',
        component: CreateOff3
    },
    {
        path: '/CreateOff4',
        component: CreateOff4
    },
    {
        path: '/SongDetail',
        component: SongDetail
    },
    {
        path: '/RecommendCreator',
        component: RecommendCreator
    },
    {
        path: '/RecommendProject',
        component: RecommendProject
    },
    {
        path: '/Connect',
        component: Connect
    },
    {
        path: '/MainNotVerified',
        component: MainNotVerified
    },
    {
        path: '/MainDashboard',
        component: MainDashboard
    },
    {
        path: '/MainVisitHome',
        component: MainVisitHome
    },
    {
        path: '/VerProfile1',
        component: VerProfile1
    },
    {
        path: '/VerProfile2',
        component: VerProfile2
    },
    {
        path: '/VerProfile3',
        component: VerProfile3
    },
    {
        path: '/CreateProject1',
        component: CreateProject1
    },
    {
        path: '/CreateProject2',
        component: CreateProject2
    },
    {
        path: '/CreateProject3',
        component: CreateProject3
    },
    {
        path: '/CreateProject4',
        component: CreateProject4
    },
    {
        path: '/CreateProject5',
        component: CreateProject5
    },
    {
        path: '/ProjectDetailHome',
        component: ProjectDetailHome
    },
    {
        path: '/ProjectDetailSongs',
        component: ProjectDetailSongs
    },
    {
        path: '/ProjectDetailRefer',
        component: ProjectDetailRefer
    },
    {
        path: '/ProjectDetailWriter',
        component: ProjectDetailWriter
    },
    {
        path: '/RsvpInfo',
        component: RsvpInfo
    },
    {
        path: '/NewSong1',
        component: NewSong1
    },
    {
        path: '/NewSong2',
        component: NewSong2
    },
    {
        path: '/NewSong3',
        component: NewSong3
    },
    {
        path: '/SongLyrics',
        component: SongLyrics
    },
    {
        path: '/SongPitchList',
        component: SongPitchList
    },
    {
        path: '/SongPitchSong',
        component: SongPitchSong
    },
    {
        path: '/SongPitchResult',
        component: SongPitchResult
    },
    {
        path: '/SongPitchWriter',
        component: SongPitchWriter
    },
    {
        path: '/SetEval1',
        component: SetEval1
    },
    {
        path: '/SetEval2',
        component: SetEval2
    },
    {
        path: '/SetEval3',
        component: SetEval3
    },
    {
        path: '/AnrDashboard',
        component: AnrDashboard
    },
    {
        path: '/AnrVisit',
        component: AnrVisit
    },
    {
        path: '/AnrPitchRecomm',
        component: AnrPitchRecomm
    },
    {
        path: '/AnrPitchDetail',
        component: AnrPitchDetail
    },
    {
        path: '/AnrEval',
        component: AnrEval
    },
    {
        path: '/AnrEvalDetail',
        component: AnrEvalDetail
    },
    {
        path: '/AnrRevalDetail',
        component: AnrRevalDetail
    },
    {
        path: '/NewPitch1',
        component: NewPitch1
    },
    {
        path: '/NewPitch2',
        component: NewPitch2
    },
    {
        path: '/NewPitch3',
        component: NewPitch3
    },
    {
        path: '/NewPitch4',
        component: NewPitch4
    },
    {
        path: '/DetailPitch',
        component: DetailPitch
    },
    {
        path: '/DetailSong',
        component: DetailSong
    },
    {
        path: '/CreateProfile1',
        component: CreateProfile1
    },
    {
        path: '/CreateProfile2',
        component: CreateProfile2
    },
    {
        path: '/CreateProfile3',
        component: CreateProfile3
    },
    {
        path: '/CreateProfile4',
        component: CreateProfile4
    },
    {
        path: '/SettingsAccount',
        component: SettingsAccount
    },
    {
        path: '/SettingsAvail',
        component: SettingsAvail
    },
    {
        path: '/SettingsProfile',
        component: SettingsProfile
    },
    {
        path: '/SettingsID',
        component: SettingsID
    },
    {
        path: '/CompanyHome',
        component: CompanyHome
    },
    {
        path: '/CompanyRos',
        component: CompanyRos
    },
    {
        path: '/CompanyPart',
        component: CompanyPart
    },
    {
        path: '/BoardNews',
        component: BoardNews
    },
    {
        path: '/BoardNewsDetail',
        component: BoardNewsDetail
    },
    {
        path: '/BoardFaq',
        component: BoardFaq
    },
    {
        path: '/BoardFaqDetail',
        component: BoardFaqDetail
    },
    {
        path: '/SongTest',
        component: SongTest
    },
    {
        path: '/SongPitchTest1',
        component: SongPitchTest1
    },
    {
        path: '/LabelCopy',
        component: LabelCopy
    },
    {
        path: '/LabelAlbum',
        component: LabelAlbum
    },
    {
        path: '/NewAlbum1',
        component: NewAlbum1
    },
    {
        path: '/NewAlbum2',
        component: NewAlbum2
    },
    {
        path: '/LabelCopyCopy',
        component: LabelCopyCopy
    },
    {
        path: '/CopySongDetail',
        component: CopySongDetail
    },
    {
        path: '/LabelCopyAlbum',
        component: LabelCopyAlbum
    },
    {
        path: '/LabelCopyDetail',
        component: LabelCopyDetail
    },
    {
        path: '/DetailLabel',
        component: DetailLabel
    },
    {
        path: '/AdaptVersion',
        component: AdaptVersion
    },
    {
        path: '/AdapTation',
        component: AdapTation
    },
    {
        path: '/CreditSongDetail',
        component: CreditSongDetail
    },


    //여기부터 데모페이지
    {
        path: '/DemoLogin',
        component: DemoLogin
    },
    {
        path: '/DemoMain',
        component: DemoMain
    },
    {
        path: '/KitButton',
        component: KitButton
    },
    {
        path: '/KitForm',
        component: KitForm
    },
    {
        path: '/KitProfile',
        component: KitProfile
    },
    {
        path: '/KitPopup',
        component: KitPopup
    },
    {
        path: '/KitEx1',
        component: KitEx1
    },
    {
        path: '/KitEx2',
        component: KitEx2
    },
    {
        path: '/KitEx3',
        component: KitEx3
    },
    {
        path: '/KitAddPop',
        component: KitAddPop
    },
    {
        path: '/KitEvalPop',
        component: KitEvalPop
    },
    {
        path: '/KitAutoPop',
        component: KitAutoPop
    },
    {
        path: '/KitSetProfile',
        component: KitSetProfile
    },
    {
        path: '/KitEditProfile',
        component: KitEditProfile
    },
    {
        path: '/KitSplit',
        component: KitSplit
    },
    {
        path: '/ProfilePanel',
        component: ProfilePanel
    },
];