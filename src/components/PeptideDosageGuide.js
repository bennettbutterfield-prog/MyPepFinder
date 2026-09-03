import { Fragment } from "react";
import { RetatrutideEscalationTimeline } from "@/components/RetatrutideEscalationTimeline";
import { RetatrutideWeightLossChart } from "@/components/RetatrutideWeightLossChart";
import { RetatrutideAdverseEventTable } from "@/components/RetatrutideAdverseEventTable";
import {
  TirzepatideAdverseEventTable,
  TirzepatideEscalationTimeline,
  TirzepatideMechanismVisual,
  TirzepatideOsaChart,
  TirzepatideTrialExplorer,
  TirzepatideVsSemaglutide,
  TirzepatideWeightLossChart,
} from "@/components/TirzepatideGuideModules";
import {
  SemaglutideAdverseEventTable,
  SemaglutideDosageSelector,
  SemaglutideMashChart,
  SemaglutideMechanismVisual,
  SemaglutideOutcomesModule,
  SemaglutideTrialExplorer,
  SemaglutideVsTirzepatide,
  SemaglutideWeightChart,
} from "@/components/SemaglutideGuideModules";
import {
  TesamorelinAdverseEventTable,
  TesamorelinFatCompartments,
  TesamorelinFormulationSelector,
  TesamorelinMechanismVisual,
  TesamorelinMonitoringPanel,
  TesamorelinReconstitutionGuide,
  TesamorelinTrialExplorer,
  TesamorelinUsesMatrix,
  TesamorelinVatChart,
} from "@/components/TesamorelinGuideModules";
import {
  Aod9604AdverseEventTable,
  Aod9604ClaimChecker,
  Aod9604Denominators,
  Aod9604MechanismVisual,
  Aod9604RouteMismatch,
  Aod9604TrialExplorer,
  Aod9604WeightSignalChart,
} from "@/components/AOD9604GuideModules";
import {
  Amino1mqClaimChecker,
  Amino1mqEvidenceNavigator,
  Amino1mqMechanismVisual,
  Amino1mqPreclinicalChart,
  Amino1mqProtocolComparison,
  Amino1mqTrialExplorer,
} from "@/components/Amino1MQGuideModules";
import {
  Bpc157AdverseEventTable,
  Bpc157HumanDashboard,
  Bpc157MechanismVisual,
  Bpc157RegulatoryTimeline,
  Bpc157RouteMatrix,
  Bpc157StudyExplorer,
  Bpc157TissueMap,
} from "@/components/BPC157GuideModules";
import {
  Tb500AdverseEventTable,
  Tb500ClaimChecker,
  Tb500ClinicalVsAnecdotal,
  Tb500DirectEvidence,
  Tb500EvidenceLadder,
  Tb500EvidenceToggle,
  Tb500HumanStatus,
  Tb500IdentityGate,
  Tb500MetabolismExplorer,
  Tb500MoleculeComparator,
  Tb500ProtocolTimeline,
  Tb500ReconCalc,
  Tb500RegulatoryTimeline,
  Tb500SafetyMatrix,
} from "@/components/TB500GuideModules";
import {
  Tb500fAdverseEventTable,
  Tb500fClaimChecker,
  Tb500fClinicalVsAnecdotal,
  Tb500fDirectEvidence,
  Tb500fEvidenceLadder,
  Tb500fHumanStatus,
  Tb500fIdentityFork,
  Tb500fIdentityGate,
  Tb500fProtocolTimeline,
  Tb500fReconCalc,
  Tb500fWoundCalc,
} from "@/components/TB500FragmentGuideModules";
import {
  CagriAdverseEventTable,
  CagriBodyCompCard,
  CagriDoseResponseExplorer,
  CagriEscalationTimeline,
  CagriEstimandExplainer,
  CagriMechanismVisual,
  CagriRedefine4Panel,
  CagriResultsToggle,
  CagriTrialExplorer,
} from "@/components/CagrilintideGuideModules";
import {
  SurvoAdverseEventTable,
  SurvoBodyCompModule,
  SurvoDoseResponseExplorer,
  SurvoEscalationTimeline,
  SurvoEstimandToggle,
  SurvoLiverDashboard,
  SurvoMaturityTracker,
  SurvoMechanismVisual,
  SurvoResponderChart,
  SurvoTrialExplorer,
} from "@/components/SurvodutideGuideModules";
import {
  MotscAnimalExplorer,
  MotscBiomarkerExplorer,
  MotscClaimChecker,
  MotscEvidenceLadder,
  MotscHumanEvidenceToggle,
  MotscMechanismVisual,
  MotscMotsMetTracker,
  MotscRegulatoryTimeline,
  MotscSafetyMatrix,
  MotscVsCb4211,
} from "@/components/MOTSCGuideModules";
import {
  SluppClaimChecker,
  SluppEnduranceChart,
  SluppEvidenceNavigator,
  SluppMechanismVisual,
  SluppMetabolicExplorer,
  SluppProtocolTimeline,
  SluppResearchTimeline,
  SluppResultsToggle,
  SluppSafetyMatrix,
  SluppVs915,
} from "@/components/SLUPP332GuideModules";
import {
  IpaAdverseEventTable,
  IpaClinicalExposure,
  IpaDosageLadder,
  IpaDosageTierSwitcher,
  IpaRouteDuration,
} from "@/components/IpamorelinGuideModules";
import {
  CjcDacAccumulation,
  CjcDacAdverseEventTable,
  CjcDacClinicalAnecdotal,
  CjcDacDosageLadder,
  CjcDacExposureCalc,
  CjcDacIdentityGate,
} from "@/components/CJC1295DACGuideModules";
import {
  CjcNodacAdverseEventTable,
  CjcNodacClaimChecker,
  CjcNodacDosageLadder,
  CjcNodacEvidenceFamilies,
  CjcNodacEvidenceSplit,
  CjcNodacIdentityGate,
  CjcNodacMoleculeCompare,
  CjcNodacOriginTimeline,
} from "@/components/CJC1295NoDACGuideModules";
import {
  HexAttenuation,
  HexAdverseEventTable,
  HexClaimChecker,
  HexClinicalAnecdotal,
  HexDoseResponse,
  HexEvidenceLadder,
  HexExposureCalc,
  HexRouteCompare,
} from "@/components/HexarelinGuideModules";
import {
  SerAdverseEventTable,
  SerClaimChecker,
  SerClinicalAnecdotal,
  SerEvidenceLadder,
  SerExposureCalc,
  SerFdaHistory,
  SerPedVelocity,
} from "@/components/SermorelinGuideModules";
import {
  Lr3AdverseEventTable,
  Lr3ClaimChecker,
  Lr3EvidenceLadder,
  Lr3HumanStatus,
  Lr3PreclinicalAnecdotal,
  Lr3VsMecasermin,
} from "@/components/IGF1LR3GuideModules";
import {
  CjcIpaAdverseEventTable,
  CjcIpaClaimChecker,
  CjcIpaClinicalVsAnecdotal,
  CjcIpaComboStatus,
  CjcIpaDacGate,
  CjcIpaEvidenceBadges,
  CjcIpaEvidenceLadder,
  CjcIpaRatioVisual,
} from "@/components/CJCIpamorelinGuideModules";
import {
  TesIpaComboStatus,
  TesIpaDoseRouteMap,
  TesIpaEvidenceBadges,
  TesIpaEvidenceBoundary,
  TesIpaFormulationGuardrail,
  TesIpaGhTimeline,
  TesIpaMechanism,
  TesIpaRegulatoryChecker,
  TesIpaSafetyToggle,
  TesIpaVatChart,
} from "@/components/TesamorelinIpamorelinGuideModules";
import {
  AdamaxAdverseEventTable,
  AdamaxClaimChecker,
  AdamaxClinicalVsAnecdotal,
  AdamaxEvidenceLadder,
  AdamaxHumanStatus,
  AdamaxIdentityGate,
  AdamaxRouteCompare,
  AdamaxScTimeline,
  AdamaxSprayCalc,
} from "@/components/AdamaxGuideModules";
import {
  KlowAdverseEventTable,
  KlowClinicalVsAnecdotal,
  KlowComboStatus,
  KlowComponentBreakdown,
  KlowComposition,
  KlowEvidenceLadder,
  KlowIdentityGate,
  KlowProtocolTimeline,
  KlowReconCalc,
} from "@/components/KLOWGuideModules";
import {
  GlowAdverseEventTable,
  GlowClinicalVsAnecdotal,
  GlowComboStatus,
  GlowComponentBreakdown,
  GlowComposition,
  GlowEvidenceLadder,
  GlowIdentityGate,
  GlowProtocolTimeline,
  GlowReconCalc,
  GlowTwelveWeek,
} from "@/components/GLOWGuideModules";
import {
  GhkAdverseEventTable,
  GhkClaimChecker,
  GhkCopperCalc,
  GhkEvidenceLadder,
  GhkIdentityGate,
  GhkInjectableStatus,
  GhkReconCalc,
  GhkScTimeline,
  GhkTopicalVsInjectable,
} from "@/components/GHKCuGuideModules";
import {
  GhkTopicalPowderAdverseEventTable,
  GhkTopicalPowderAppliedCalc,
  GhkTopicalPowderAssayCalc,
  GhkTopicalPowderBatchCalc,
  GhkTopicalPowderClaimChecker,
  GhkTopicalPowderClinicalVsAnecdotal,
  GhkTopicalPowderConcentrationLadder,
  GhkTopicalPowderCopperCalc,
  GhkTopicalPowderEvidenceLadder,
  GhkTopicalPowderHumanDoses,
  GhkTopicalPowderIdentityGate,
  GhkTopicalPowderNestedPercent,
  GhkTopicalPowderProtocolTimeline,
} from "@/components/GhkCuTopicalPowderGuideModules";
import {
  CartalaxAdverseEventTable,
  CartalaxClaimChecker,
  CartalaxEvidenceLadder,
  CartalaxIdentityGate,
  CartalaxPatentStrata,
  CartalaxPatentVsModern,
  CartalaxReconCalc,
  CartalaxScProtocol,
} from "@/components/CartalaxGuideModules";
import {
  Ara290AdverseEventTable,
  Ara290ClaimChecker,
  Ara290ClinicalVsAnecdotal,
  Ara290Dosara,
  Ara290EvidenceLadder,
  Ara290IdentityGate,
  Ara290ProtocolTimeline,
  Ara290ReconCalc,
} from "@/components/ARA290GuideModules";
import {
  KpvAdverseEventTable,
  KpvClaimChecker,
  KpvClinicalVsAnecdotal,
  KpvEvidenceLadder,
  KpvFormGate,
  KpvHumanStatus,
  KpvIdentityGate,
  KpvProtocolTimeline,
  KpvReconCalc,
} from "@/components/KPVGuideModules";
import {
  Ll37AdverseEventTable,
  Ll37ClaimChecker,
  Ll37ClinicalVsAnecdotal,
  Ll37EvidenceLadder,
  Ll37HumanStatus,
  Ll37IdentityGate,
  Ll37ProtocolTimeline,
  Ll37ReconCalc,
  Ll37WoundCalc,
} from "@/components/LL37GuideModules";
import {
  Ta1AdverseEventTable,
  Ta1ClaimChecker,
  Ta1ClinicalVsAnecdotal,
  Ta1EvidenceLadder,
  Ta1HumanStatus,
  Ta1IdentityGate,
  Ta1ProtocolTimeline,
  Ta1ReconCalc,
  Ta1WeeklyExposure,
} from "@/components/ThymosinAlpha1GuideModules";
import {
  ThymulinAdverseEventTable,
  ThymulinClaimChecker,
  ThymulinClinicalVsAnecdotal,
  ThymulinEvidenceLadder,
  ThymulinHumanStatus,
  ThymulinIdentityGate,
  ThymulinProtocolTimeline,
  ThymulinReconCalc,
  ThymulinZincGate,
} from "@/components/ThymulinGuideModules";
import {
  KpvGhkCuAdverseEventTable,
  KpvGhkCuClaimChecker,
  KpvGhkCuClinicalVsAnecdotal,
  KpvGhkCuComboStatus,
  KpvGhkCuComponentBreakdown,
  KpvGhkCuComposition,
  KpvGhkCuEvidenceLadder,
  KpvGhkCuIdentityGate,
  KpvGhkCuProtocolTimeline,
  KpvGhkCuReconCalc,
} from "@/components/KpvGhkCuGuideModules";
import {
  BpcGhkCuAdverseEventTable,
  BpcGhkCuClaimChecker,
  BpcGhkCuClinicalVsAnecdotal,
  BpcGhkCuComboStatus,
  BpcGhkCuComponentBreakdown,
  BpcGhkCuComposition,
  BpcGhkCuEvidenceLadder,
  BpcGhkCuIdentityGate,
  BpcGhkCuProtocolTimeline,
  BpcGhkCuReconCalc,
} from "@/components/BpcGhkCuGuideModules";
import {
  BpcTbAdverseEventTable,
  BpcTbClaimChecker,
  BpcTbClinicalVsAnecdotal,
  BpcTbComboStatus,
  BpcTbComponentBreakdown,
  BpcTbComposition,
  BpcTbEvidenceLadder,
  BpcTbIdentityGate,
  BpcTbProtocolTimeline,
  BpcTbReconCalc,
  BpcTbWeeklyExposure,
} from "@/components/BpcTbGuideModules";
import {
  Ta1ThymalinAdverseEventTable,
  Ta1ThymalinClaimChecker,
  Ta1ThymalinClinicalVsAnecdotal,
  Ta1ThymalinComboStatus,
  Ta1ThymalinComplexWarning,
  Ta1ThymalinEvidenceLadder,
  Ta1ThymalinIdentityGate,
  Ta1ThymalinProtocolTimeline,
  Ta1ThymalinReconCalc,
} from "@/components/Ta1ThymalinGuideModules";
import {
  EpithalonAdverseEventTable,
  EpithalonClaimChecker,
  EpithalonClinicalVsAnecdotal,
  EpithalonCumulative,
  EpithalonEvidenceLadder,
  EpithalonHedCalc,
  EpithalonHumanStatus,
  EpithalonIdentityGate,
  EpithalonProtocolTimeline,
  EpithalonReconCalc,
} from "@/components/EpithalonGuideModules";
import {
  GhkBasicAcetateCalc,
  GhkBasicAdverseEventTable,
  GhkBasicClaimChecker,
  GhkBasicClinicalVsAnecdotal,
  GhkBasicEvidenceLadder,
  GhkBasicHumanStatus,
  GhkBasicIdentityGate,
  GhkBasicProtocolTimeline,
  GhkBasicReconCalc,
  GhkBasicSameUnits,
} from "@/components/GhkBasicGuideModules";
import {
  LivagenAdverseEventTable,
  LivagenClaimChecker,
  LivagenClinicalVsAnecdotal,
  LivagenEvidenceLadder,
  LivagenHumanStatus,
  LivagenIdentityGate,
  LivagenProtocolTimeline,
  LivagenReconCalc,
  LivagenWeightCalc,
} from "@/components/LivagenGuideModules";
import {
  NadPlusAdverseEventTable,
  NadPlusClaimChecker,
  NadPlusClinicalVsAnecdotal,
  NadPlusEvidenceLadder,
  NadPlusHumanStatus,
  NadPlusIdentityGate,
  NadPlusProtocolTimeline,
  NadPlusRateTable,
  NadPlusReconCalc,
} from "@/components/NadPlusGuideModules";
import {
  PinealonAdverseEventTable,
  PinealonClaimChecker,
  PinealonClinicalVsAnecdotal,
  PinealonEvidenceLadder,
  PinealonHumanStatus,
  PinealonIdentityGate,
  PinealonOralCalc,
  PinealonProtocolTimeline,
  PinealonReconCalc,
} from "@/components/PinealonGuideModules";
import {
  ThymagenAdverseEventTable,
  ThymagenClaimChecker,
  ThymagenClinicalVsAnecdotal,
  ThymagenCourseCalc,
  ThymagenEvidenceLadder,
  ThymagenHumanStatus,
  ThymagenIdentityGate,
  ThymagenProtocolTimeline,
  ThymagenReconCalc,
} from "@/components/ThymagenGuideModules";
import {
  ThymalinAdverseEventTable,
  ThymalinClaimChecker,
  ThymalinClinicalVsAnecdotal,
  ThymalinCourseCalc,
  ThymalinEvidenceLadder,
  ThymalinHumanStatus,
  ThymalinIdentityGate,
  ThymalinProtocolTimeline,
  ThymalinReconCalc,
} from "@/components/ThymalinGuideModules";
import {
  AhkCuAdverseEventTable,
  AhkCuClaimChecker,
  AhkCuClinicalVsAnecdotal,
  AhkCuEvidenceLadder,
  AhkCuHumanStatus,
  AhkCuIdentityGate,
  AhkCuMolarCalc,
  AhkCuProtocolTimeline,
  AhkCuTopicalCalc,
} from "@/components/AhkCuGuideModules";
import {
  DihexaAdverseEventTable,
  DihexaAnecdotalProtocols,
  DihexaAnecdotalTimeline,
  DihexaAssayCalc,
  DihexaClaimChecker,
  DihexaClinicalVsAnecdotal,
  DihexaEvidenceIntegrity,
  DihexaEvidenceLadder,
  DihexaHumanStatus,
  DihexaIdentityGate,
  DihexaMolarCalc,
  DihexaPreclinicalDoses,
  DihexaProtocolTimeline,
} from "@/components/DihexaGuideModules";
import {
  DsipAdverseEventTable,
  DsipAnecdotalProtocols,
  DsipClaimChecker,
  DsipClinicalVsAnecdotal,
  DsipEvidenceIssues,
  DsipEvidenceLadder,
  DsipHumanSleepStudies,
  DsipIdentityGate,
  DsipNmolConverter,
  DsipProtocolTimeline,
  DsipReconCalc,
} from "@/components/DsipGuideModules";
import {
  SelankAdverseEventTable,
  SelankAnecdotalProtocols,
  SelankClaimChecker,
  SelankClinicalVsAnecdotal,
  SelankCumulativeCalc,
  SelankEvidenceHierarchy,
  SelankEvidenceLadder,
  SelankHumanStudies,
  SelankIdentityGate,
  SelankLabelDoseCalc,
  SelankLabelVsTrial,
  SelankMoleculeCompare,
  SelankPreclinicalDoses,
  SelankProtocolTimeline,
} from "@/components/SelankGuideModules";
import {
  Melanotan2AdverseEventTable,
  Melanotan2AnecdotalProtocols,
  Melanotan2ClaimChecker,
  Melanotan2ClinicalVsAnecdotal,
  Melanotan2CumulativeCalc,
  Melanotan2EvidenceHierarchy,
  Melanotan2EvidenceLadder,
  Melanotan2HumanStudies,
  Melanotan2IdentityGate,
  Melanotan2MoleculeCompare,
  Melanotan2PilotEscalation,
  Melanotan2PreclinicalDoses,
  Melanotan2ProtocolTimeline,
  Melanotan2ReceptorPathways,
  Melanotan2StudyAdverseEvents,
  Melanotan2UnitConverter,
  Melanotan2WeightCalc,
} from "@/components/Melanotan2GuideModules";
import {
  Melanotan1AdverseEventTable,
  Melanotan1AnecdotalProtocols,
  Melanotan1ClaimChecker,
  Melanotan1ClinicalVsAnecdotal,
  Melanotan1CumulativeCalc,
  Melanotan1EvidenceHierarchy,
  Melanotan1EvidenceLadder,
  Melanotan1HumanStudies,
  Melanotan1IdentityGate,
  Melanotan1ImplantVsInjection,
  Melanotan1LabeledAdverseEvents,
  Melanotan1MoleculeCompare,
  Melanotan1PreclinicalDoses,
  Melanotan1ProtocolTimeline,
  Melanotan1UnitConverter,
  Melanotan1WeightCalc,
} from "@/components/Melanotan1GuideModules";
import {
  Kisspeptin10AdverseEventTable,
  Kisspeptin10AnecdotalProtocols,
  Kisspeptin10BolusCalc,
  Kisspeptin10ClaimChecker,
  Kisspeptin10ClinicalVsAnecdotal,
  Kisspeptin10CumulativeCalc,
  Kisspeptin10EvidenceHierarchy,
  Kisspeptin10EvidenceLadder,
  Kisspeptin10HumanStudies,
  Kisspeptin10IdentityGate,
  Kisspeptin10Kp54Confusion,
  Kisspeptin10MoleculeCompare,
  Kisspeptin10PreclinicalDoses,
  Kisspeptin10ProtocolTimeline,
  Kisspeptin10RouteCompare,
  Kisspeptin10UnitConverter,
  Kisspeptin10Yeung2026,
} from "@/components/Kisspeptin10GuideModules";
import {
  Pt141AdverseEventTable,
  Pt141ApprovalBoundary,
  Pt141ClaimChecker,
  Pt141Comparison,
  Pt141DoseRouteMap,
  Pt141EvidenceLadder,
  Pt141IdentityGate,
  Pt141MechanismVisual,
  Pt141OutcomeExplorer,
  Pt141SafetyToggle,
} from "@/components/Pt141GuideModules";
import {
  SemaxAdverseEventTable,
  SemaxAnecdotalProtocols,
  SemaxClaimChecker,
  SemaxClinicalVsAnecdotal,
  SemaxConcentrationCompare,
  SemaxCumulativeCalc,
  SemaxDropCalc,
  SemaxEvidenceHierarchy,
  SemaxEvidenceLadder,
  SemaxHumanStudies,
  SemaxIdentityGate,
  SemaxLabelIndications,
  SemaxPreclinicalDoses,
  SemaxProtocolTimeline,
  SemaxStrokeRegimens,
} from "@/components/SemaxGuideModules";
import {
  Snap8AdverseEvents,
  Snap8AnecdotalProtocols,
  Snap8AppliedMassCalc,
  Snap8ClaimChecker,
  Snap8ClinicalVsAnecdotal,
  Snap8CumulativeCalc,
  Snap8EvidenceHierarchy,
  Snap8EvidenceLadder,
  Snap8HumanStudies,
  Snap8IdentityGate,
  Snap8MicroneedleVsTopical,
  Snap8PreclinicalDoses,
  Snap8ProtocolTimeline,
  Snap8SolutionMath,
  Snap8UnitConverter,
} from "@/components/Snap8GuideModules";
import {
  SelankSemaxAdverseEventTable,
  SelankSemaxAnecdotalProtocols,
  SelankSemaxClaimChecker,
  SelankSemaxClinicalVsAnecdotal,
  SelankSemaxComboStatus,
  SelankSemaxCumulativeCalc,
  SelankSemaxDualCompare,
  SelankSemaxEquimolarCalc,
  SelankSemaxEvidenceHierarchy,
  SelankSemaxEvidenceLadder,
  SelankSemaxFmriStudy,
  SelankSemaxIdentityGate,
  SelankSemaxParentAnchors,
  SelankSemaxPreclinicalDoses,
  SelankSemaxProtocolTimeline,
} from "@/components/SelankSemaxGuideModules";

function parseRichText(text) {
  if (!text) return null;
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function RichParagraph({ children, className = "" }) {
  return (
    <p className={`text-sm leading-relaxed text-slate-600 ${className}`}>
      {parseRichText(children)}
    </p>
  );
}

function GuideTable({ table }) {
  const align = table.align || [];
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      {table.caption ? (
        <p className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          {table.caption}
        </p>
      ) : null}
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            {table.headers.map((h, i) => (
              <th
                key={`${h}-${i}`}
                className={`px-3 py-3 font-semibold ${
                  align[i] === "right" ? "text-right" : "text-left"
                }`}
              >
                {parseRichText(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri} className="border-b border-slate-50 last:border-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-3 text-xs text-slate-700 ${
                    align[ci] === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {parseRichText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GlanceTable({ table }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {table.title ? (
        <p className="border-b border-slate-100 bg-slate-50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
          {table.title}
        </p>
      ) : null}
      <dl className="divide-y divide-slate-50">
        {table.rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-start justify-between gap-4 px-3 py-2.5"
          >
            <dt className="text-xs text-slate-500">{parseRichText(label)}</dt>
            <dd className="text-right text-xs font-semibold text-slate-900">
              {parseRichText(value)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function GuideWidget({ name }) {
  if (name === "escalation-timeline") return <RetatrutideEscalationTimeline />;
  if (name === "weight-loss-chart") return <RetatrutideWeightLossChart />;
  if (name === "adverse-events-toggle") return <RetatrutideAdverseEventTable />;
  if (name === "tirz-escalation-timeline")
    return <TirzepatideEscalationTimeline />;
  if (name === "tirz-weight-loss-chart") return <TirzepatideWeightLossChart />;
  if (name === "tirz-adverse-events") return <TirzepatideAdverseEventTable />;
  if (name === "tirz-vs-semaglutide") return <TirzepatideVsSemaglutide />;
  if (name === "tirz-osa-chart") return <TirzepatideOsaChart />;
  if (name === "tirz-mechanism") return <TirzepatideMechanismVisual />;
  if (name === "tirz-trial-explorer") return <TirzepatideTrialExplorer />;
  if (name === "sema-dosage-selector") return <SemaglutideDosageSelector />;
  if (name === "sema-weight-chart") return <SemaglutideWeightChart />;
  if (name === "sema-adverse-events") return <SemaglutideAdverseEventTable />;
  if (name === "sema-outcomes") return <SemaglutideOutcomesModule />;
  if (name === "sema-mash-chart") return <SemaglutideMashChart />;
  if (name === "sema-vs-tirzepatide") return <SemaglutideVsTirzepatide />;
  if (name === "sema-mechanism") return <SemaglutideMechanismVisual />;
  if (name === "sema-trial-explorer") return <SemaglutideTrialExplorer />;
  if (name === "tesamorelin-formulation-selector")
    return <TesamorelinFormulationSelector />;
  if (name === "tesamorelin-reconstitution")
    return <TesamorelinReconstitutionGuide />;
  if (name === "tesamorelin-vat-chart") return <TesamorelinVatChart />;
  if (name === "tesamorelin-fat-compartments")
    return <TesamorelinFatCompartments />;
  if (name === "tesamorelin-adverse-events")
    return <TesamorelinAdverseEventTable />;
  if (name === "tesamorelin-monitoring") return <TesamorelinMonitoringPanel />;
  if (name === "tesamorelin-uses-matrix") return <TesamorelinUsesMatrix />;
  if (name === "tesamorelin-mechanism") return <TesamorelinMechanismVisual />;
  if (name === "tesamorelin-trial-explorer") return <TesamorelinTrialExplorer />;
  if (name === "aod-weight-signal") return <Aod9604WeightSignalChart />;
  if (name === "aod-route-mismatch") return <Aod9604RouteMismatch />;
  if (name === "aod-adverse-events") return <Aod9604AdverseEventTable />;
  if (name === "aod-denominators") return <Aod9604Denominators />;
  if (name === "aod-mechanism") return <Aod9604MechanismVisual />;
  if (name === "aod-claim-checker") return <Aod9604ClaimChecker />;
  if (name === "aod-trial-explorer") return <Aod9604TrialExplorer />;
  if (name === "amino1mq-evidence-navigator")
    return <Amino1mqEvidenceNavigator />;
  if (name === "amino1mq-mechanism") return <Amino1mqMechanismVisual />;
  if (name === "amino1mq-protocol-comparison")
    return <Amino1mqProtocolComparison />;
  if (name === "amino1mq-claim-checker") return <Amino1mqClaimChecker />;
  if (name === "amino1mq-preclinical-chart")
    return <Amino1mqPreclinicalChart />;
  if (name === "amino1mq-trial-explorer") return <Amino1mqTrialExplorer />;
  if (name === "bpc157-tissue-map") return <Bpc157TissueMap />;
  if (name === "bpc157-human-dashboard") return <Bpc157HumanDashboard />;
  if (name === "bpc157-route-matrix") return <Bpc157RouteMatrix />;
  if (name === "bpc157-mechanism") return <Bpc157MechanismVisual />;
  if (name === "bpc157-adverse-events") return <Bpc157AdverseEventTable />;
  if (name === "bpc157-regulatory-timeline")
    return <Bpc157RegulatoryTimeline />;
  if (name === "bpc157-study-explorer") return <Bpc157StudyExplorer />;
  if (name === "tb500-identity-gate") return <Tb500IdentityGate />;
  if (name === "tb500-molecule-comparator") return <Tb500MoleculeComparator />;
  if (name === "tb500-human-status") return <Tb500HumanStatus />;
  if (name === "tb500-direct-evidence") return <Tb500DirectEvidence />;
  if (name === "tb500-evidence-toggle") return <Tb500EvidenceToggle />;
  if (name === "tb500-protocol-timeline") return <Tb500ProtocolTimeline />;
  if (name === "tb500-clinical-vs-anecdotal") return <Tb500ClinicalVsAnecdotal />;
  if (name === "tb500-recon-calc") return <Tb500ReconCalc />;
  if (name === "tb500-claim-checker") return <Tb500ClaimChecker />;
  if (name === "tb500-metabolism") return <Tb500MetabolismExplorer />;
  if (name === "tb500-evidence-ladder") return <Tb500EvidenceLadder />;
  if (name === "tb500-adverse-events") return <Tb500AdverseEventTable />;
  if (name === "tb500-safety-matrix") return <Tb500SafetyMatrix />;
  if (name === "tb500-regulatory-timeline") return <Tb500RegulatoryTimeline />;
  if (name === "tb500f-identity-gate") return <Tb500fIdentityGate />;
  if (name === "tb500f-identity-fork") return <Tb500fIdentityFork />;
  if (name === "tb500f-human-status") return <Tb500fHumanStatus />;
  if (name === "tb500f-wound-calc") return <Tb500fWoundCalc />;
  if (name === "tb500f-protocol-timeline") return <Tb500fProtocolTimeline />;
  if (name === "tb500f-clinical-vs-anecdotal")
    return <Tb500fClinicalVsAnecdotal />;
  if (name === "tb500f-recon-calc") return <Tb500fReconCalc />;
  if (name === "tb500f-claim-checker") return <Tb500fClaimChecker />;
  if (name === "tb500f-evidence-ladder") return <Tb500fEvidenceLadder />;
  if (name === "tb500f-adverse-events") return <Tb500fAdverseEventTable />;
  if (name === "tb500f-direct-evidence") return <Tb500fDirectEvidence />;
  if (name === "cagri-dose-response") return <CagriDoseResponseExplorer />;
  if (name === "cagri-escalation-timeline") return <CagriEscalationTimeline />;
  if (name === "cagri-results-toggle") return <CagriResultsToggle />;
  if (name === "cagri-estimand-explainer") return <CagriEstimandExplainer />;
  if (name === "cagri-adverse-events") return <CagriAdverseEventTable />;
  if (name === "cagri-trial-explorer") return <CagriTrialExplorer />;
  if (name === "cagri-mechanism") return <CagriMechanismVisual />;
  if (name === "cagri-redefine4") return <CagriRedefine4Panel />;
  if (name === "cagri-body-comp") return <CagriBodyCompCard />;
  if (name === "survo-estimand-toggle") return <SurvoEstimandToggle />;
  if (name === "survo-escalation-timeline") return <SurvoEscalationTimeline />;
  if (name === "survo-dose-response") return <SurvoDoseResponseExplorer />;
  if (name === "survo-responder-chart") return <SurvoResponderChart />;
  if (name === "survo-adverse-events") return <SurvoAdverseEventTable />;
  if (name === "survo-liver-dashboard") return <SurvoLiverDashboard />;
  if (name === "survo-body-comp") return <SurvoBodyCompModule />;
  if (name === "survo-mechanism") return <SurvoMechanismVisual />;
  if (name === "survo-trial-explorer") return <SurvoTrialExplorer />;
  if (name === "survo-maturity-tracker") return <SurvoMaturityTracker />;
  if (name === "motsc-evidence-ladder") return <MotscEvidenceLadder />;
  if (name === "motsc-human-evidence") return <MotscHumanEvidenceToggle />;
  if (name === "motsc-mots-met-tracker") return <MotscMotsMetTracker />;
  if (name === "motsc-claim-checker") return <MotscClaimChecker />;
  if (name === "motsc-animal-explorer") return <MotscAnimalExplorer />;
  if (name === "motsc-mechanism") return <MotscMechanismVisual />;
  if (name === "motsc-vs-cb4211") return <MotscVsCb4211 />;
  if (name === "motsc-safety-matrix") return <MotscSafetyMatrix />;
  if (name === "motsc-regulatory-timeline") return <MotscRegulatoryTimeline />;
  if (name === "motsc-biomarker-explorer") return <MotscBiomarkerExplorer />;
  if (name === "slupp-evidence-navigator") return <SluppEvidenceNavigator />;
  if (name === "slupp-protocol-timeline") return <SluppProtocolTimeline />;
  if (name === "slupp-endurance-chart") return <SluppEnduranceChart />;
  if (name === "slupp-metabolic-explorer") return <SluppMetabolicExplorer />;
  if (name === "slupp-results-toggle") return <SluppResultsToggle />;
  if (name === "slupp-mechanism") return <SluppMechanismVisual />;
  if (name === "slupp-claim-checker") return <SluppClaimChecker />;
  if (name === "slupp-vs-915") return <SluppVs915 />;
  if (name === "slupp-safety-matrix") return <SluppSafetyMatrix />;
  if (name === "slupp-research-timeline") return <SluppResearchTimeline />;
  if (name === "ipa-dosage-tier-switcher") return <IpaDosageTierSwitcher />;
  if (name === "ipa-clinical-exposure") return <IpaClinicalExposure />;
  if (name === "ipa-route-duration") return <IpaRouteDuration />;
  if (name === "ipa-adverse-events") return <IpaAdverseEventTable />;
  if (name === "ipa-dosage-ladder") return <IpaDosageLadder />;
  if (name === "cjc-dac-identity-gate") return <CjcDacIdentityGate />;
  if (name === "cjc-dac-exposure-calc") return <CjcDacExposureCalc />;
  if (name === "cjc-dac-clinical-anecdotal") return <CjcDacClinicalAnecdotal />;
  if (name === "cjc-dac-accumulation") return <CjcDacAccumulation />;
  if (name === "cjc-dac-adverse-events") return <CjcDacAdverseEventTable />;
  if (name === "cjc-dac-dosage-ladder") return <CjcDacDosageLadder />;
  if (name === "cjc-nodac-identity-gate") return <CjcNodacIdentityGate />;
  if (name === "cjc-nodac-evidence-split") return <CjcNodacEvidenceSplit />;
  if (name === "cjc-nodac-molecule-compare") return <CjcNodacMoleculeCompare />;
  if (name === "cjc-nodac-claim-checker") return <CjcNodacClaimChecker />;
  if (name === "cjc-nodac-evidence-families") return <CjcNodacEvidenceFamilies />;
  if (name === "cjc-nodac-origin-timeline") return <CjcNodacOriginTimeline />;
  if (name === "cjc-nodac-adverse-events") return <CjcNodacAdverseEventTable />;
  if (name === "cjc-nodac-dosage-ladder") return <CjcNodacDosageLadder />;
  if (name === "hex-dose-response") return <HexDoseResponse />;
  if (name === "hex-exposure-calc") return <HexExposureCalc />;
  if (name === "hex-clinical-anecdotal") return <HexClinicalAnecdotal />;
  if (name === "hex-attenuation") return <HexAttenuation />;
  if (name === "hex-route-compare") return <HexRouteCompare />;
  if (name === "hex-claim-checker") return <HexClaimChecker />;
  if (name === "hex-adverse-events") return <HexAdverseEventTable />;
  if (name === "hex-evidence-ladder") return <HexEvidenceLadder />;
  if (name === "ser-fda-history") return <SerFdaHistory />;
  if (name === "ser-clinical-anecdotal") return <SerClinicalAnecdotal />;
  if (name === "ser-exposure-calc") return <SerExposureCalc />;
  if (name === "ser-ped-velocity") return <SerPedVelocity />;
  if (name === "ser-claim-checker") return <SerClaimChecker />;
  if (name === "ser-adverse-events") return <SerAdverseEventTable />;
  if (name === "ser-evidence-ladder") return <SerEvidenceLadder />;
  if (name === "lr3-human-status") return <Lr3HumanStatus />;
  if (name === "lr3-vs-mecasermin") return <Lr3VsMecasermin />;
  if (name === "lr3-preclinical-anecdotal") return <Lr3PreclinicalAnecdotal />;
  if (name === "lr3-claim-checker") return <Lr3ClaimChecker />;
  if (name === "lr3-adverse-events") return <Lr3AdverseEventTable />;
  if (name === "lr3-evidence-ladder") return <Lr3EvidenceLadder />;
  if (name === "cjc-ipa-dac-gate") return <CjcIpaDacGate />;
  if (name === "cjc-ipa-evidence-badges") return <CjcIpaEvidenceBadges />;
  if (name === "cjc-ipa-combo-status") return <CjcIpaComboStatus />;
  if (name === "cjc-ipa-ratio-visual") return <CjcIpaRatioVisual />;
  if (name === "cjc-ipa-clinical-vs-anecdotal")
    return <CjcIpaClinicalVsAnecdotal />;
  if (name === "cjc-ipa-claim-checker") return <CjcIpaClaimChecker />;
  if (name === "cjc-ipa-evidence-ladder") return <CjcIpaEvidenceLadder />;
  if (name === "cjc-ipa-adverse-events") return <CjcIpaAdverseEventTable />;
  if (name === "tes-ipa-evidence-boundary") return <TesIpaEvidenceBoundary />;
  if (name === "tes-ipa-combo-status") return <TesIpaComboStatus />;
  if (name === "tes-ipa-mechanism") return <TesIpaMechanism />;
  if (name === "tes-ipa-vat-chart") return <TesIpaVatChart />;
  if (name === "tes-ipa-evidence-badges") return <TesIpaEvidenceBadges />;
  if (name === "tes-ipa-dose-route-map") return <TesIpaDoseRouteMap />;
  if (name === "tes-ipa-formulation-guardrail") return <TesIpaFormulationGuardrail />;
  if (name === "tes-ipa-safety-toggle") return <TesIpaSafetyToggle />;
  if (name === "tes-ipa-gh-timeline") return <TesIpaGhTimeline />;
  if (name === "tes-ipa-regulatory-checker") return <TesIpaRegulatoryChecker />;
  if (name === "adamax-identity-gate") return <AdamaxIdentityGate />;
  if (name === "adamax-human-status") return <AdamaxHumanStatus />;
  if (name === "adamax-sc-timeline") return <AdamaxScTimeline />;
  if (name === "adamax-spray-calc") return <AdamaxSprayCalc />;
  if (name === "adamax-clinical-vs-anecdotal")
    return <AdamaxClinicalVsAnecdotal />;
  if (name === "adamax-route-compare") return <AdamaxRouteCompare />;
  if (name === "adamax-claim-checker") return <AdamaxClaimChecker />;
  if (name === "adamax-evidence-ladder") return <AdamaxEvidenceLadder />;
  if (name === "adamax-adverse-events") return <AdamaxAdverseEventTable />;
  if (name === "klow-composition") return <KlowComposition />;
  if (name === "klow-identity-gate") return <KlowIdentityGate />;
  if (name === "klow-combo-status") return <KlowComboStatus />;
  if (name === "klow-component-breakdown") return <KlowComponentBreakdown />;
  if (name === "klow-protocol-timeline") return <KlowProtocolTimeline />;
  if (name === "klow-recon-calc") return <KlowReconCalc />;
  if (name === "klow-clinical-vs-anecdotal") return <KlowClinicalVsAnecdotal />;
  if (name === "klow-evidence-ladder") return <KlowEvidenceLadder />;
  if (name === "klow-adverse-events") return <KlowAdverseEventTable />;
  if (name === "glow-composition") return <GlowComposition />;
  if (name === "glow-identity-gate") return <GlowIdentityGate />;
  if (name === "glow-combo-status") return <GlowComboStatus />;
  if (name === "glow-component-breakdown") return <GlowComponentBreakdown />;
  if (name === "glow-protocol-timeline") return <GlowProtocolTimeline />;
  if (name === "glow-twelve-week") return <GlowTwelveWeek />;
  if (name === "glow-recon-calc") return <GlowReconCalc />;
  if (name === "glow-clinical-vs-anecdotal") return <GlowClinicalVsAnecdotal />;
  if (name === "glow-evidence-ladder") return <GlowEvidenceLadder />;
  if (name === "glow-adverse-events") return <GlowAdverseEventTable />;
  if (name === "ghk-identity-gate") return <GhkIdentityGate />;
  if (name === "ghk-copper-calc") return <GhkCopperCalc />;
  if (name === "ghk-injectable-status") return <GhkInjectableStatus />;
  if (name === "ghk-sc-timeline") return <GhkScTimeline />;
  if (name === "ghk-recon-calc") return <GhkReconCalc />;
  if (name === "ghk-topical-vs-injectable") return <GhkTopicalVsInjectable />;
  if (name === "ghk-claim-checker") return <GhkClaimChecker />;
  if (name === "ghk-evidence-ladder") return <GhkEvidenceLadder />;
  if (name === "ghk-adverse-events") return <GhkAdverseEventTable />;
  if (name === "ghk-topical-powder-identity-gate")
    return <GhkTopicalPowderIdentityGate />;
  if (name === "ghk-topical-powder-human-doses")
    return <GhkTopicalPowderHumanDoses />;
  if (name === "ghk-topical-powder-concentration-ladder")
    return <GhkTopicalPowderConcentrationLadder />;
  if (name === "ghk-topical-powder-clinical-vs-anecdotal")
    return <GhkTopicalPowderClinicalVsAnecdotal />;
  if (name === "ghk-topical-powder-batch-calc")
    return <GhkTopicalPowderBatchCalc />;
  if (name === "ghk-topical-powder-assay-calc")
    return <GhkTopicalPowderAssayCalc />;
  if (name === "ghk-topical-powder-nested-percent")
    return <GhkTopicalPowderNestedPercent />;
  if (name === "ghk-topical-powder-applied-calc")
    return <GhkTopicalPowderAppliedCalc />;
  if (name === "ghk-topical-powder-copper-calc")
    return <GhkTopicalPowderCopperCalc />;
  if (name === "ghk-topical-powder-protocol-timeline")
    return <GhkTopicalPowderProtocolTimeline />;
  if (name === "ghk-topical-powder-claim-checker")
    return <GhkTopicalPowderClaimChecker />;
  if (name === "ghk-topical-powder-evidence-ladder")
    return <GhkTopicalPowderEvidenceLadder />;
  if (name === "ghk-topical-powder-adverse-events")
    return <GhkTopicalPowderAdverseEventTable />;
  if (name === "cartalax-identity-gate") return <CartalaxIdentityGate />;
  if (name === "cartalax-patent-strata") return <CartalaxPatentStrata />;
  if (name === "cartalax-patent-vs-modern") return <CartalaxPatentVsModern />;
  if (name === "cartalax-sc-protocol") return <CartalaxScProtocol />;
  if (name === "cartalax-recon-calc") return <CartalaxReconCalc />;
  if (name === "cartalax-claim-checker") return <CartalaxClaimChecker />;
  if (name === "cartalax-evidence-ladder") return <CartalaxEvidenceLadder />;
  if (name === "cartalax-adverse-events") return <CartalaxAdverseEventTable />;
  if (name === "ara290-identity-gate") return <Ara290IdentityGate />;
  if (name === "ara290-dosara") return <Ara290Dosara />;
  if (name === "ara290-protocol-timeline") return <Ara290ProtocolTimeline />;
  if (name === "ara290-clinical-vs-anecdotal") return <Ara290ClinicalVsAnecdotal />;
  if (name === "ara290-recon-calc") return <Ara290ReconCalc />;
  if (name === "ara290-claim-checker") return <Ara290ClaimChecker />;
  if (name === "ara290-evidence-ladder") return <Ara290EvidenceLadder />;
  if (name === "ara290-adverse-events") return <Ara290AdverseEventTable />;
  if (name === "kpv-identity-gate") return <KpvIdentityGate />;
  if (name === "kpv-form-gate") return <KpvFormGate />;
  if (name === "kpv-human-status") return <KpvHumanStatus />;
  if (name === "kpv-protocol-timeline") return <KpvProtocolTimeline />;
  if (name === "kpv-clinical-vs-anecdotal") return <KpvClinicalVsAnecdotal />;
  if (name === "kpv-recon-calc") return <KpvReconCalc />;
  if (name === "kpv-claim-checker") return <KpvClaimChecker />;
  if (name === "kpv-evidence-ladder") return <KpvEvidenceLadder />;
  if (name === "kpv-adverse-events") return <KpvAdverseEventTable />;
  if (name === "kpv-ghk-cu-composition") return <KpvGhkCuComposition />;
  if (name === "kpv-ghk-cu-identity-gate") return <KpvGhkCuIdentityGate />;
  if (name === "kpv-ghk-cu-combo-status") return <KpvGhkCuComboStatus />;
  if (name === "kpv-ghk-cu-component-breakdown")
    return <KpvGhkCuComponentBreakdown />;
  if (name === "kpv-ghk-cu-protocol-timeline")
    return <KpvGhkCuProtocolTimeline />;
  if (name === "kpv-ghk-cu-recon-calc") return <KpvGhkCuReconCalc />;
  if (name === "kpv-ghk-cu-clinical-vs-anecdotal")
    return <KpvGhkCuClinicalVsAnecdotal />;
  if (name === "kpv-ghk-cu-claim-checker") return <KpvGhkCuClaimChecker />;
  if (name === "kpv-ghk-cu-evidence-ladder") return <KpvGhkCuEvidenceLadder />;
  if (name === "kpv-ghk-cu-adverse-events") return <KpvGhkCuAdverseEventTable />;
  if (name === "bpc-ghk-composition") return <BpcGhkCuComposition />;
  if (name === "bpc-ghk-identity-gate") return <BpcGhkCuIdentityGate />;
  if (name === "bpc-ghk-combo-status") return <BpcGhkCuComboStatus />;
  if (name === "bpc-ghk-component-breakdown")
    return <BpcGhkCuComponentBreakdown />;
  if (name === "bpc-ghk-protocol-timeline")
    return <BpcGhkCuProtocolTimeline />;
  if (name === "bpc-ghk-recon-calc") return <BpcGhkCuReconCalc />;
  if (name === "bpc-ghk-clinical-vs-anecdotal")
    return <BpcGhkCuClinicalVsAnecdotal />;
  if (name === "bpc-ghk-claim-checker") return <BpcGhkCuClaimChecker />;
  if (name === "bpc-ghk-evidence-ladder") return <BpcGhkCuEvidenceLadder />;
  if (name === "bpc-ghk-adverse-events") return <BpcGhkCuAdverseEventTable />;
  if (name === "bpc-tb-composition") return <BpcTbComposition />;
  if (name === "bpc-tb-identity-gate") return <BpcTbIdentityGate />;
  if (name === "bpc-tb-combo-status") return <BpcTbComboStatus />;
  if (name === "bpc-tb-component-breakdown") return <BpcTbComponentBreakdown />;
  if (name === "bpc-tb-weekly-exposure") return <BpcTbWeeklyExposure />;
  if (name === "bpc-tb-protocol-timeline") return <BpcTbProtocolTimeline />;
  if (name === "bpc-tb-recon-calc") return <BpcTbReconCalc />;
  if (name === "bpc-tb-clinical-vs-anecdotal")
    return <BpcTbClinicalVsAnecdotal />;
  if (name === "bpc-tb-claim-checker") return <BpcTbClaimChecker />;
  if (name === "bpc-tb-evidence-ladder") return <BpcTbEvidenceLadder />;
  if (name === "bpc-tb-adverse-events") return <BpcTbAdverseEventTable />;
  if (name === "ta1-thymalin-identity-gate") return <Ta1ThymalinIdentityGate />;
  if (name === "ta1-thymalin-combo-status") return <Ta1ThymalinComboStatus />;
  if (name === "ta1-thymalin-protocol-timeline")
    return <Ta1ThymalinProtocolTimeline />;
  if (name === "ta1-thymalin-recon-calc") return <Ta1ThymalinReconCalc />;
  if (name === "ta1-thymalin-complex-warning")
    return <Ta1ThymalinComplexWarning />;
  if (name === "ta1-thymalin-clinical-vs-anecdotal")
    return <Ta1ThymalinClinicalVsAnecdotal />;
  if (name === "ta1-thymalin-claim-checker") return <Ta1ThymalinClaimChecker />;
  if (name === "ta1-thymalin-evidence-ladder")
    return <Ta1ThymalinEvidenceLadder />;
  if (name === "ta1-thymalin-adverse-events")
    return <Ta1ThymalinAdverseEventTable />;
  if (name === "epithalon-identity-gate") return <EpithalonIdentityGate />;
  if (name === "epithalon-human-status") return <EpithalonHumanStatus />;
  if (name === "epithalon-clinical-vs-anecdotal")
    return <EpithalonClinicalVsAnecdotal />;
  if (name === "epithalon-hed-calc") return <EpithalonHedCalc />;
  if (name === "epithalon-protocol-timeline")
    return <EpithalonProtocolTimeline />;
  if (name === "epithalon-recon-calc") return <EpithalonReconCalc />;
  if (name === "epithalon-cumulative") return <EpithalonCumulative />;
  if (name === "epithalon-claim-checker") return <EpithalonClaimChecker />;
  if (name === "epithalon-evidence-ladder") return <EpithalonEvidenceLadder />;
  if (name === "epithalon-adverse-events")
    return <EpithalonAdverseEventTable />;
  if (name === "ghk-basic-identity-gate") return <GhkBasicIdentityGate />;
  if (name === "ghk-basic-human-status") return <GhkBasicHumanStatus />;
  if (name === "ghk-basic-acetate-calc") return <GhkBasicAcetateCalc />;
  if (name === "ghk-basic-clinical-vs-anecdotal")
    return <GhkBasicClinicalVsAnecdotal />;
  if (name === "ghk-basic-protocol-timeline")
    return <GhkBasicProtocolTimeline />;
  if (name === "ghk-basic-recon-calc") return <GhkBasicReconCalc />;
  if (name === "ghk-basic-same-units") return <GhkBasicSameUnits />;
  if (name === "ghk-basic-claim-checker") return <GhkBasicClaimChecker />;
  if (name === "ghk-basic-evidence-ladder") return <GhkBasicEvidenceLadder />;
  if (name === "ghk-basic-adverse-events")
    return <GhkBasicAdverseEventTable />;
  if (name === "livagen-identity-gate") return <LivagenIdentityGate />;
  if (name === "livagen-human-status") return <LivagenHumanStatus />;
  if (name === "livagen-clinical-vs-anecdotal")
    return <LivagenClinicalVsAnecdotal />;
  if (name === "livagen-weight-calc") return <LivagenWeightCalc />;
  if (name === "livagen-protocol-timeline") return <LivagenProtocolTimeline />;
  if (name === "livagen-recon-calc") return <LivagenReconCalc />;
  if (name === "livagen-claim-checker") return <LivagenClaimChecker />;
  if (name === "livagen-evidence-ladder") return <LivagenEvidenceLadder />;
  if (name === "livagen-adverse-events") return <LivagenAdverseEventTable />;
  if (name === "nad-plus-identity-gate") return <NadPlusIdentityGate />;
  if (name === "nad-plus-human-status") return <NadPlusHumanStatus />;
  if (name === "nad-plus-clinical-vs-anecdotal")
    return <NadPlusClinicalVsAnecdotal />;
  if (name === "nad-plus-rate-table") return <NadPlusRateTable />;
  if (name === "nad-plus-protocol-timeline")
    return <NadPlusProtocolTimeline />;
  if (name === "nad-plus-recon-calc") return <NadPlusReconCalc />;
  if (name === "nad-plus-claim-checker") return <NadPlusClaimChecker />;
  if (name === "nad-plus-evidence-ladder") return <NadPlusEvidenceLadder />;
  if (name === "nad-plus-adverse-events") return <NadPlusAdverseEventTable />;
  if (name === "pinealon-identity-gate") return <PinealonIdentityGate />;
  if (name === "pinealon-human-status") return <PinealonHumanStatus />;
  if (name === "pinealon-clinical-vs-anecdotal")
    return <PinealonClinicalVsAnecdotal />;
  if (name === "pinealon-oral-calc") return <PinealonOralCalc />;
  if (name === "pinealon-protocol-timeline")
    return <PinealonProtocolTimeline />;
  if (name === "pinealon-recon-calc") return <PinealonReconCalc />;
  if (name === "pinealon-claim-checker") return <PinealonClaimChecker />;
  if (name === "pinealon-evidence-ladder") return <PinealonEvidenceLadder />;
  if (name === "pinealon-adverse-events") return <PinealonAdverseEventTable />;
  if (name === "thymagen-identity-gate") return <ThymagenIdentityGate />;
  if (name === "thymagen-human-status") return <ThymagenHumanStatus />;
  if (name === "thymagen-clinical-vs-anecdotal")
    return <ThymagenClinicalVsAnecdotal />;
  if (name === "thymagen-course-calc") return <ThymagenCourseCalc />;
  if (name === "thymagen-protocol-timeline")
    return <ThymagenProtocolTimeline />;
  if (name === "thymagen-recon-calc") return <ThymagenReconCalc />;
  if (name === "thymagen-claim-checker") return <ThymagenClaimChecker />;
  if (name === "thymagen-evidence-ladder") return <ThymagenEvidenceLadder />;
  if (name === "thymagen-adverse-events") return <ThymagenAdverseEventTable />;
  if (name === "thymalin-identity-gate") return <ThymalinIdentityGate />;
  if (name === "thymalin-human-status") return <ThymalinHumanStatus />;
  if (name === "thymalin-clinical-vs-anecdotal")
    return <ThymalinClinicalVsAnecdotal />;
  if (name === "thymalin-course-calc") return <ThymalinCourseCalc />;
  if (name === "thymalin-protocol-timeline")
    return <ThymalinProtocolTimeline />;
  if (name === "thymalin-recon-calc") return <ThymalinReconCalc />;
  if (name === "thymalin-claim-checker") return <ThymalinClaimChecker />;
  if (name === "thymalin-evidence-ladder") return <ThymalinEvidenceLadder />;
  if (name === "thymalin-adverse-events") return <ThymalinAdverseEventTable />;
  if (name === "ahk-cu-identity-gate") return <AhkCuIdentityGate />;
  if (name === "ahk-cu-human-status") return <AhkCuHumanStatus />;
  if (name === "ahk-cu-clinical-vs-anecdotal")
    return <AhkCuClinicalVsAnecdotal />;
  if (name === "ahk-cu-molar-calc") return <AhkCuMolarCalc />;
  if (name === "ahk-cu-topical-calc") return <AhkCuTopicalCalc />;
  if (name === "ahk-cu-protocol-timeline") return <AhkCuProtocolTimeline />;
  if (name === "ahk-cu-claim-checker") return <AhkCuClaimChecker />;
  if (name === "ahk-cu-evidence-ladder") return <AhkCuEvidenceLadder />;
  if (name === "ahk-cu-adverse-events") return <AhkCuAdverseEventTable />;
  if (name === "dihexa-identity-gate") return <DihexaIdentityGate />;
  if (name === "dihexa-evidence-integrity") return <DihexaEvidenceIntegrity />;
  if (name === "dihexa-human-status") return <DihexaHumanStatus />;
  if (name === "dihexa-anecdotal-protocols")
    return <DihexaAnecdotalProtocols />;
  if (name === "dihexa-clinical-vs-anecdotal")
    return <DihexaClinicalVsAnecdotal />;
  if (name === "dihexa-anecdotal-timeline") return <DihexaAnecdotalTimeline />;
  if (name === "dihexa-preclinical-doses") return <DihexaPreclinicalDoses />;
  if (name === "dihexa-assay-calc") return <DihexaAssayCalc />;
  if (name === "dihexa-molar-calc") return <DihexaMolarCalc />;
  if (name === "dihexa-protocol-timeline") return <DihexaProtocolTimeline />;
  if (name === "dihexa-claim-checker") return <DihexaClaimChecker />;
  if (name === "dihexa-evidence-ladder") return <DihexaEvidenceLadder />;
  if (name === "dihexa-adverse-events") return <DihexaAdverseEventTable />;
  if (name === "dsip-identity-gate") return <DsipIdentityGate />;
  if (name === "dsip-evidence-issues") return <DsipEvidenceIssues />;
  if (name === "dsip-nmol-converter") return <DsipNmolConverter />;
  if (name === "dsip-human-sleep-studies") return <DsipHumanSleepStudies />;
  if (name === "dsip-anecdotal-protocols") return <DsipAnecdotalProtocols />;
  if (name === "dsip-clinical-vs-anecdotal") return <DsipClinicalVsAnecdotal />;
  if (name === "dsip-recon-calc") return <DsipReconCalc />;
  if (name === "dsip-protocol-timeline") return <DsipProtocolTimeline />;
  if (name === "dsip-claim-checker") return <DsipClaimChecker />;
  if (name === "dsip-evidence-ladder") return <DsipEvidenceLadder />;
  if (name === "dsip-adverse-events") return <DsipAdverseEventTable />;
  if (name === "selank-identity-gate") return <SelankIdentityGate />;
  if (name === "selank-molecule-compare") return <SelankMoleculeCompare />;
  if (name === "selank-label-dose-calc") return <SelankLabelDoseCalc />;
  if (name === "selank-human-studies") return <SelankHumanStudies />;
  if (name === "selank-label-vs-trial") return <SelankLabelVsTrial />;
  if (name === "selank-evidence-hierarchy") return <SelankEvidenceHierarchy />;
  if (name === "selank-anecdotal-protocols") return <SelankAnecdotalProtocols />;
  if (name === "selank-cumulative-calc") return <SelankCumulativeCalc />;
  if (name === "selank-clinical-vs-anecdotal")
    return <SelankClinicalVsAnecdotal />;
  if (name === "selank-preclinical-doses") return <SelankPreclinicalDoses />;
  if (name === "selank-protocol-timeline") return <SelankProtocolTimeline />;
  if (name === "selank-claim-checker") return <SelankClaimChecker />;
  if (name === "selank-evidence-ladder") return <SelankEvidenceLadder />;
  if (name === "selank-adverse-events") return <SelankAdverseEventTable />;
  if (name === "melanotan-1-identity-gate") return <Melanotan1IdentityGate />;
  if (name === "melanotan-1-molecule-compare")
    return <Melanotan1MoleculeCompare />;
  if (name === "melanotan-1-unit-converter")
    return <Melanotan1UnitConverter />;
  if (name === "melanotan-1-weight-calc") return <Melanotan1WeightCalc />;
  if (name === "melanotan-1-implant-vs-injection")
    return <Melanotan1ImplantVsInjection />;
  if (name === "melanotan-1-human-studies") return <Melanotan1HumanStudies />;
  if (name === "melanotan-1-evidence-hierarchy")
    return <Melanotan1EvidenceHierarchy />;
  if (name === "melanotan-1-anecdotal-protocols")
    return <Melanotan1AnecdotalProtocols />;
  if (name === "melanotan-1-cumulative-calc")
    return <Melanotan1CumulativeCalc />;
  if (name === "melanotan-1-clinical-vs-anecdotal")
    return <Melanotan1ClinicalVsAnecdotal />;
  if (name === "melanotan-1-preclinical-doses")
    return <Melanotan1PreclinicalDoses />;
  if (name === "melanotan-1-labeled-adverse-events")
    return <Melanotan1LabeledAdverseEvents />;
  if (name === "melanotan-1-protocol-timeline")
    return <Melanotan1ProtocolTimeline />;
  if (name === "melanotan-1-claim-checker") return <Melanotan1ClaimChecker />;
  if (name === "melanotan-1-evidence-ladder")
    return <Melanotan1EvidenceLadder />;
  if (name === "melanotan-1-adverse-events")
    return <Melanotan1AdverseEventTable />;
  if (name === "melanotan-2-identity-gate") return <Melanotan2IdentityGate />;
  if (name === "melanotan-2-molecule-compare")
    return <Melanotan2MoleculeCompare />;
  if (name === "melanotan-2-unit-converter")
    return <Melanotan2UnitConverter />;
  if (name === "melanotan-2-weight-calc") return <Melanotan2WeightCalc />;
  if (name === "melanotan-2-human-studies") return <Melanotan2HumanStudies />;
  if (name === "melanotan-2-pilot-escalation")
    return <Melanotan2PilotEscalation />;
  if (name === "melanotan-2-evidence-hierarchy")
    return <Melanotan2EvidenceHierarchy />;
  if (name === "melanotan-2-anecdotal-protocols")
    return <Melanotan2AnecdotalProtocols />;
  if (name === "melanotan-2-cumulative-calc")
    return <Melanotan2CumulativeCalc />;
  if (name === "melanotan-2-clinical-vs-anecdotal")
    return <Melanotan2ClinicalVsAnecdotal />;
  if (name === "melanotan-2-preclinical-doses")
    return <Melanotan2PreclinicalDoses />;
  if (name === "melanotan-2-receptor-pathways")
    return <Melanotan2ReceptorPathways />;
  if (name === "melanotan-2-study-adverse-events")
    return <Melanotan2StudyAdverseEvents />;
  if (name === "melanotan-2-protocol-timeline")
    return <Melanotan2ProtocolTimeline />;
  if (name === "melanotan-2-claim-checker") return <Melanotan2ClaimChecker />;
  if (name === "melanotan-2-evidence-ladder")
    return <Melanotan2EvidenceLadder />;
  if (name === "melanotan-2-adverse-events")
    return <Melanotan2AdverseEventTable />;
  if (name === "kisspeptin-10-identity-gate") return <Kisspeptin10IdentityGate />;
  if (name === "kisspeptin-10-molecule-compare")
    return <Kisspeptin10MoleculeCompare />;
  if (name === "kisspeptin-10-unit-converter")
    return <Kisspeptin10UnitConverter />;
  if (name === "kisspeptin-10-bolus-calc") return <Kisspeptin10BolusCalc />;
  if (name === "kisspeptin-10-human-studies") return <Kisspeptin10HumanStudies />;
  if (name === "kisspeptin-10-evidence-hierarchy")
    return <Kisspeptin10EvidenceHierarchy />;
  if (name === "kisspeptin-10-route-compare") return <Kisspeptin10RouteCompare />;
  if (name === "kisspeptin-10-yeung-2026") return <Kisspeptin10Yeung2026 />;
  if (name === "kisspeptin-10-kp54-confusion") return <Kisspeptin10Kp54Confusion />;
  if (name === "kisspeptin-10-anecdotal-protocols")
    return <Kisspeptin10AnecdotalProtocols />;
  if (name === "kisspeptin-10-cumulative-calc")
    return <Kisspeptin10CumulativeCalc />;
  if (name === "kisspeptin-10-clinical-vs-anecdotal")
    return <Kisspeptin10ClinicalVsAnecdotal />;
  if (name === "kisspeptin-10-preclinical-doses")
    return <Kisspeptin10PreclinicalDoses />;
  if (name === "kisspeptin-10-protocol-timeline")
    return <Kisspeptin10ProtocolTimeline />;
  if (name === "kisspeptin-10-claim-checker") return <Kisspeptin10ClaimChecker />;
  if (name === "kisspeptin-10-evidence-ladder")
    return <Kisspeptin10EvidenceLadder />;
  if (name === "kisspeptin-10-adverse-events")
    return <Kisspeptin10AdverseEventTable />;
  if (name === "pt-141-identity-gate") return <Pt141IdentityGate />;
  if (name === "pt-141-approval-boundary") return <Pt141ApprovalBoundary />;
  if (name === "pt-141-outcome-explorer") return <Pt141OutcomeExplorer />;
  if (name === "pt-141-dose-route-map") return <Pt141DoseRouteMap />;
  if (name === "pt-141-safety-toggle") return <Pt141SafetyToggle />;
  if (name === "pt-141-mechanism-visual") return <Pt141MechanismVisual />;
  if (name === "pt-141-comparison") return <Pt141Comparison />;
  if (name === "pt-141-claim-checker") return <Pt141ClaimChecker />;
  if (name === "pt-141-evidence-ladder") return <Pt141EvidenceLadder />;
  if (name === "pt-141-adverse-events") return <Pt141AdverseEventTable />;
  if (name === "semax-identity-gate") return <SemaxIdentityGate />;
  if (name === "semax-concentration-compare") return <SemaxConcentrationCompare />;
  if (name === "semax-drop-calc") return <SemaxDropCalc />;
  if (name === "semax-label-indications") return <SemaxLabelIndications />;
  if (name === "semax-stroke-regimens") return <SemaxStrokeRegimens />;
  if (name === "semax-human-studies") return <SemaxHumanStudies />;
  if (name === "semax-evidence-hierarchy") return <SemaxEvidenceHierarchy />;
  if (name === "semax-anecdotal-protocols") return <SemaxAnecdotalProtocols />;
  if (name === "semax-cumulative-calc") return <SemaxCumulativeCalc />;
  if (name === "semax-clinical-vs-anecdotal") return <SemaxClinicalVsAnecdotal />;
  if (name === "semax-preclinical-doses") return <SemaxPreclinicalDoses />;
  if (name === "semax-protocol-timeline") return <SemaxProtocolTimeline />;
  if (name === "semax-claim-checker") return <SemaxClaimChecker />;
  if (name === "semax-evidence-ladder") return <SemaxEvidenceLadder />;
  if (name === "semax-adverse-events") return <SemaxAdverseEventTable />;
  if (name === "snap-8-identity-gate") return <Snap8IdentityGate />;
  if (name === "snap-8-solution-math") return <Snap8SolutionMath />;
  if (name === "snap-8-unit-converter") return <Snap8UnitConverter />;
  if (name === "snap-8-applied-mass-calc") return <Snap8AppliedMassCalc />;
  if (name === "snap-8-human-studies") return <Snap8HumanStudies />;
  if (name === "snap-8-microneedle-vs-topical")
    return <Snap8MicroneedleVsTopical />;
  if (name === "snap-8-evidence-hierarchy") return <Snap8EvidenceHierarchy />;
  if (name === "snap-8-anecdotal-protocols") return <Snap8AnecdotalProtocols />;
  if (name === "snap-8-cumulative-calc") return <Snap8CumulativeCalc />;
  if (name === "snap-8-clinical-vs-anecdotal")
    return <Snap8ClinicalVsAnecdotal />;
  if (name === "snap-8-preclinical-doses") return <Snap8PreclinicalDoses />;
  if (name === "snap-8-protocol-timeline") return <Snap8ProtocolTimeline />;
  if (name === "snap-8-claim-checker") return <Snap8ClaimChecker />;
  if (name === "snap-8-evidence-ladder") return <Snap8EvidenceLadder />;
  if (name === "snap-8-adverse-events") return <Snap8AdverseEvents />;
  if (name === "selank-semax-identity-gate") return <SelankSemaxIdentityGate />;
  if (name === "selank-semax-dual-compare") return <SelankSemaxDualCompare />;
  if (name === "selank-semax-equimolar-calc") return <SelankSemaxEquimolarCalc />;
  if (name === "selank-semax-combo-status") return <SelankSemaxComboStatus />;
  if (name === "selank-semax-fmri-study") return <SelankSemaxFmriStudy />;
  if (name === "selank-semax-parent-anchors") return <SelankSemaxParentAnchors />;
  if (name === "selank-semax-evidence-hierarchy")
    return <SelankSemaxEvidenceHierarchy />;
  if (name === "selank-semax-anecdotal-protocols")
    return <SelankSemaxAnecdotalProtocols />;
  if (name === "selank-semax-cumulative-calc") return <SelankSemaxCumulativeCalc />;
  if (name === "selank-semax-clinical-vs-anecdotal")
    return <SelankSemaxClinicalVsAnecdotal />;
  if (name === "selank-semax-preclinical-doses")
    return <SelankSemaxPreclinicalDoses />;
  if (name === "selank-semax-protocol-timeline")
    return <SelankSemaxProtocolTimeline />;
  if (name === "selank-semax-claim-checker") return <SelankSemaxClaimChecker />;
  if (name === "selank-semax-evidence-ladder")
    return <SelankSemaxEvidenceLadder />;
  if (name === "selank-semax-adverse-events")
    return <SelankSemaxAdverseEventTable />;
  if (name === "ll-37-identity-gate") return <Ll37IdentityGate />;
  if (name === "ll-37-human-status") return <Ll37HumanStatus />;
  if (name === "ll-37-wound-calc") return <Ll37WoundCalc />;
  if (name === "ll-37-protocol-timeline") return <Ll37ProtocolTimeline />;
  if (name === "ll-37-clinical-vs-anecdotal") return <Ll37ClinicalVsAnecdotal />;
  if (name === "ll-37-recon-calc") return <Ll37ReconCalc />;
  if (name === "ll-37-claim-checker") return <Ll37ClaimChecker />;
  if (name === "ll-37-evidence-ladder") return <Ll37EvidenceLadder />;
  if (name === "ll-37-adverse-events") return <Ll37AdverseEventTable />;
  if (name === "ta1-identity-gate") return <Ta1IdentityGate />;
  if (name === "ta1-human-status") return <Ta1HumanStatus />;
  if (name === "ta1-weekly-exposure") return <Ta1WeeklyExposure />;
  if (name === "ta1-protocol-timeline") return <Ta1ProtocolTimeline />;
  if (name === "ta1-clinical-vs-anecdotal") return <Ta1ClinicalVsAnecdotal />;
  if (name === "ta1-recon-calc") return <Ta1ReconCalc />;
  if (name === "ta1-claim-checker") return <Ta1ClaimChecker />;
  if (name === "ta1-evidence-ladder") return <Ta1EvidenceLadder />;
  if (name === "ta1-adverse-events") return <Ta1AdverseEventTable />;
  if (name === "thymulin-identity-gate") return <ThymulinIdentityGate />;
  if (name === "thymulin-zinc-gate") return <ThymulinZincGate />;
  if (name === "thymulin-human-status") return <ThymulinHumanStatus />;
  if (name === "thymulin-protocol-timeline") return <ThymulinProtocolTimeline />;
  if (name === "thymulin-clinical-vs-anecdotal")
    return <ThymulinClinicalVsAnecdotal />;
  if (name === "thymulin-recon-calc") return <ThymulinReconCalc />;
  if (name === "thymulin-claim-checker") return <ThymulinClaimChecker />;
  if (name === "thymulin-evidence-ladder") return <ThymulinEvidenceLadder />;
  if (name === "thymulin-adverse-events") return <ThymulinAdverseEventTable />;
  return null;
}

function renderBlockContent(block) {
  return (
    <>
      {(block.paragraphs || []).map((p, i) => (
        <RichParagraph key={`p-${i}`} className="mt-3">
          {p}
        </RichParagraph>
      ))}
      {block.highlight ? (
        <p className="mt-4 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-center text-sm font-bold text-violet-800">
          {parseRichText(block.highlight)}
        </p>
      ) : null}
      {(block.paragraphsAfterHighlight || []).map((p, i) => (
        <RichParagraph key={`pah-${i}`} className="mt-3">
          {p}
        </RichParagraph>
      ))}
      {(block.bullets || []).length > 0 ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-600">
          {block.bullets.map((b) => (
            <li key={b}>{parseRichText(b)}</li>
          ))}
        </ul>
      ) : null}
      {(block.numbered || []).length > 0 ? (
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
          {block.numbered.map((n) => (
            <li key={n}>{parseRichText(n)}</li>
          ))}
        </ol>
      ) : null}
      {(block.paragraphsBeforeTables || []).map((p, i) => (
        <RichParagraph key={`pbt-${i}`} className="mt-3">
          {p}
        </RichParagraph>
      ))}
      {block.widget ? <GuideWidget name={block.widget} /> : null}
      {(block.tables || []).map((t, i) => (
        <GuideTable key={`t-${i}`} table={t} />
      ))}
      {block.glanceTable ? <GlanceTable table={block.glanceTable} /> : null}
      {(block.notes || []).map((n, i) => (
        <p
          key={`n-${i}`}
          className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950"
        >
          {parseRichText(n)}
        </p>
      ))}
      {(block.footnotes || []).map((f, i) => (
        <p key={`f-${i}`} className="mt-2 text-xs text-slate-500">
          {parseRichText(f)}
        </p>
      ))}
      {(block.paragraphsAfter || []).map((p, i) => (
        <RichParagraph key={`pa-${i}`} className="mt-3">
          {p}
        </RichParagraph>
      ))}
      {(block.extraParagraphs || []).map((p, i) => (
        <RichParagraph key={`ep-${i}`} className="mt-3">
          {p}
        </RichParagraph>
      ))}
      {(block.subsections || []).map((sub) => (
        <div key={sub.title} className="mt-8">
          <h3 className="text-lg font-bold text-slate-900">{sub.title}</h3>
          {renderBlockContent(sub)}
        </div>
      ))}
      {block.widgetAfter ? <GuideWidget name={block.widgetAfter} /> : null}
    </>
  );
}

export function PeptideDosageGuide({ guide }) {
  if (!guide) return null;

  return (
    <article className="space-y-12">
      <header id="dosage">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
          {guide.updated}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {guide.title}
        </h2>
        {guide.callout ? (
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
            {parseRichText(guide.callout)}
          </p>
        ) : null}
        <div className="mt-4 space-y-3">
          {guide.intro.map((p) => (
            <RichParagraph key={p}>{p}</RichParagraph>
          ))}
        </div>

        {guide.glance ? (
          <div className="mt-6">
            <h3 className="text-base font-bold text-slate-900">
              {guide.glance.title}
            </h3>
            {guide.glance.table ? (
              <GuideTable table={guide.glance.table} />
            ) : null}
            {guide.glance.items ? (
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <ul className="space-y-2">
                  {guide.glance.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-snug text-slate-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      <span>{parseRichText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {guide.glance.note ? (
              <p className="mt-4 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm leading-relaxed text-violet-950">
                {parseRichText(guide.glance.note)}
              </p>
            ) : null}
          </div>
        ) : null}
      </header>

      {guide.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            {section.title}
          </h2>
          {renderBlockContent(section)}
        </section>
      ))}

      {guide.faq ? (
        <section id="faq" aria-labelledby="retatrutide-faq-heading">
          <h2
            id="retatrutide-faq-heading"
            className="text-xl font-bold text-slate-900 sm:text-2xl"
          >
            {guide.faq.title}
          </h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {guide.faq.items.map((item) => (
              <details key={item.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-violet-50/60 sm:px-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-sm font-semibold leading-snug text-slate-900">
                    {item.question}
                  </h3>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-180 group-open:border-violet-300 group-open:bg-violet-50 group-open:text-violet-700"
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5">
                  <RichParagraph>{item.answer}</RichParagraph>
                </div>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {guide.sources ? (
        <section id="sources">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            {guide.sources.title}
          </h2>
          <ul className="mt-5 space-y-4">
            {guide.sources.items.map((s) => (
              <li
                key={s.authors + (s.title || s.detail)}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-bold text-slate-900">{s.authors}</p>
                {s.title ? (
                  s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium text-violet-700 hover:underline"
                    >
                      <em>{s.title}</em>
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-slate-800">
                      <em>{s.title}</em>
                    </p>
                  )
                ) : null}
                <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                {s.doi ? (
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {s.doi}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
          {guide.sources.glanceTable ? (
            <GlanceTable table={guide.sources.glanceTable} />
          ) : null}
        </section>
      ) : null}

      {guide.researchStatus ? (
        <section id="research-status">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            {guide.researchStatus.title}
          </h2>
          {renderBlockContent(guide.researchStatus)}
        </section>
      ) : null}

      {guide.safety ? (
        <section
          id="safety"
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <h2 className="text-lg font-bold text-slate-900">
            {guide.safety.title}
          </h2>
          <div className="mt-3 space-y-3">
            {guide.safety.paragraphs.map((p) => (
              <RichParagraph key={p}>{p}</RichParagraph>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
