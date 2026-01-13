from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.colors import HexColor

file_path = "gen_resume.pdf"

doc = SimpleDocTemplate(
    file_path,
    pagesize=LETTER,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

styles.add(ParagraphStyle(name="HeaderName", fontSize=18, leading=22, spaceAfter=6, fontName="Helvetica-Bold"))
styles.add(ParagraphStyle(name="HeaderMeta", fontSize=9, leading=12, textColor=HexColor("#555555"), spaceAfter=14))

# SectionHeader fontSize reduced to 11
styles.add(ParagraphStyle(
    name="SectionHeader",
    fontSize=11,
    leading=13,
    spaceBefore=16,
    spaceAfter=4,
    fontName="Helvetica-Bold"
))

styles.add(ParagraphStyle(name="Body", fontSize=10, leading=14, spaceAfter=6))
styles.add(ParagraphStyle(name="BulletSmall", fontSize=9, leading=12))
styles.add(ParagraphStyle(name="Role", fontSize=10, leading=14, fontName="Helvetica-Bold"))
styles.add(ParagraphStyle(name="Date", fontSize=9, leading=12, textColor=HexColor("#6b7280"), spaceAfter=4))

story = []

def section(title):
    story.append(Paragraph(title, styles["SectionHeader"]))
    story.append(HRFlowable(width="100%", thickness=0.75, color=HexColor("#9ca3af"), spaceAfter=8))

# Header
story.append(Paragraph("Kenneth Zimny", styles["HeaderName"]))
story.append(Paragraph(
    "kenneth.zimny@gmail.com • Chicago, IL • linkedin.com/in/kenneth-zimny • kennethzimny.com",
    styles["HeaderMeta"]
))

# Summary
section("SUMMARY")
story.append(Paragraph(
    "Accomplished Full-Stack Developer with experience in Frontend, Backend, and Application Development. "
    "Known for creating secure, scalable, and high-performing web applications that align technical strategies "
    "with business objectives. Adept at building responsive websites, enhancing business features, and delivering "
    "impactful user experiences using tools such as React, Next.js, Adobe Experience Manager, and WordPress. "
    "Brings a proven ability to thrive in diverse roles—whether as a sole developer, business owner, or collaborative "
    "team contributor—while demonstrating strong problem-solving, organizational, and communication skills.",
    styles["Body"]
))

# Experience
section("EXPERIENCE")

story.append(Paragraph("Critical Mass — Frontend Developer", styles["Role"]))
story.append(Paragraph("Sep 2023 – Present", styles["Date"]))
story.append(ListFlowable([
    Paragraph("Owned development and optimization of secure, high-traffic React and Adobe Experience Manager (AEM) applications serving ~30M visits in Y2025, supporting core business features, UX, and primary conversion funnels.", styles["BulletSmall"]),
    Paragraph("Recovered a 78% decline in a core High-Value Action (primary form submission), delivering a 308% conversion lift within 30 days through targeted technical improvements.", styles["BulletSmall"])
], bulletType="bullet"))

story.append(Spacer(1, 6))

story.append(Paragraph("Critical Mass — Associate Web Developer", styles["Role"]))
story.append(Paragraph("Apr 2022 – Sep 2023", styles["Date"]))
story.append(ListFlowable([
    Paragraph("Implemented frontend components and page templates using HTML, CSS, and JavaScript.", styles["BulletSmall"]),
    Paragraph("Assisted in debugging, QA validation, and incremental feature enhancements across React and AEM-based projects.", styles["BulletSmall"])
], bulletType="bullet"))

story.append(Spacer(1, 6))

story.append(Paragraph("Tractatus Design Studio — Technical Lead & Business Owner", styles["Role"]))
story.append(Paragraph("Aug 2021 – Sep 2022", styles["Date"]))
story.append(ListFlowable([
    Paragraph("Served as the sole technical lead, owning system architecture, implementation, deployment, and ongoing maintenance across all client projects.", styles["BulletSmall"]),
    Paragraph("Provided consulting services while building and maintaining long-term client relationships.", styles["BulletSmall"])
], bulletType="bullet"))

story.append(Spacer(1, 6))

story.append(Paragraph("ArtVersion — Frontend Developer", styles["Role"]))
story.append(Paragraph("Feb 2021 – Aug 2021", styles["Date"]))
story.append(ListFlowable([
    Paragraph("Designed and developed responsive WordPress websites for clients across multiple industries.", styles["BulletSmall"])
], bulletType="bullet"))

# Education
section("EDUCATION")
story.append(Paragraph("Elmhurst University — Bachelor of Philosophy", styles["Body"]))
story.append(ListFlowable([
    Paragraph("3.73 GPA", styles["BulletSmall"]),
    Paragraph("Graduated with Honors in Philosophy", styles["BulletSmall"]),
    Paragraph("Clark Award Recipient — Excellence in Philosophy", styles["BulletSmall"]),
    Paragraph("Minor - Business Administration", styles["BulletSmall"])
], bulletType="bullet"))

# Certifications
section("CERTIFICATIONS")
story.append(Paragraph("CompTIA Security+ • AWS Certified Cloud Practitioner", styles["Body"]))

# Skills
section("SKILLS")
story.append(Paragraph(
    "HTML • CSS • JavaScript • React • Next.js • Adobe Experience Manager • WordPress • Web Security • Performance Optimization "
    "• DevOps Fundamentals • Embedded Systems • Collaboration & Communication",
    styles["Body"]
))

doc.build(story)