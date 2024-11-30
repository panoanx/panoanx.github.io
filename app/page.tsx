import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8 py-16 md:p-24">
      <div className="prose lg:prose-lg prose-ul:pl-0 prose-li:pl-0 mx-auto">
        <h1 className="font-semibold">Pengfei Xie</h1>
        <h2 className="">About</h2>
        <p>
          I am a first-year M.D. student in Clinical Medicine at{" "}
          <Link
            className="no-underline text-blue-700"
            href="https://www.shsmu.edu.cn/"
          >
            Shanghai Jiao Tong University School of Medicine (previously known as Shanghai Second
            Medical University)
          </Link>
          . Previously, I received my B.Eng. degree in Computer Science
          (Artificial Intelligence) from{" "}
          <Link
            className="no-underline text-blue-700"
            href="https://www.seu.edu.cn/"
          >
            Southeast University
          </Link>{" "}
          in 2024. From 2022 to 2024, I worked at the{" "}
          <Link
            className="no-underline text-blue-700"
            href="https://www.mvig.org/"
          >
            Machine Vision and Intelligence Group
          </Link>{" "}
          at{" "}
          <Link
            className="no-underline text-blue-700"
            href="https://cs.sjtu.edu.cn/"
          >
            Department of Computer Science, Shanghai Jiao Tong University
          </Link>
          . My experience includes developing general Machine Learning models,
          large-scale (reinforcement learning, crypto mining) systems, unix
          programming and web applications.
        </p>

        <h2>Contact</h2>
        <code className="not-prose">xiepf2002 # gmail dot com</code>

        <h2>Publications</h2>

        <ul>
          <li className="list-none">
            <Link
              href="https://ms-mano.robotflow.ai"
              className="no-underline font-semibold"
            >
              MS-MANO: Enabling Hand Pose Tracking with Biomechanical
              Constraints
            </Link>
            <div className="italic">
              <span className="font-semibold">Pengfei Xie</span>*, Wenqiang Xu*,
              Tutian Tang, Zhenjun Yu, Cewu Lu
            </div>
            <div className="">
              IEEE/CVF Conference on Computer Vision and Pattern Recognition
              (CVPR) 2024
            </div>
            <div className="space-x-4 italic">
              <Link
                href="https://ms-mano.robotflow.ai"
                className="no-underline text-blue-700"
              >
                project page
              </Link>
              <Link
                href="https://arxiv.org/abs/2404.10227"
                className="no-underline text-blue-700"
              >
                arXiv:2404.10227
              </Link>
              <Link
                href="https://openaccess.thecvf.com/content/CVPR2024/papers/Xie_MS-MANO_Enabling_Hand_Pose_Tracking_with_Biomechanical_Constraints_CVPR_2024_paper.pdf"
                className="no-underline text-blue-700"
              >
                pdf
              </Link>
            </div>
          </li>
          <li className="list-none">
            <Link
              href="https://sites.google.com/view/dextog"
              className="no-underline font-semibold"
            >
              DexTOG: Learning Task-Oriented Dexterous Grasp with Language Condition
            </Link>
            <div className="italic">
              Jieyi Zhang, Wenqiang Xu, Zhengjun Yu, <span className="font-semibold">Pengfei Xie</span>, 
              Tutian Tang, Cewu Lu
            </div>
            <div className="">
              IEEE Robotics and Automation Letters (RAL), 2024
            </div>
            <div className="space-x-4 italic">
              <Link
                href="https://sites.google.com/view/dextog"
                className="no-underline text-blue-700"
              >
                project page
              </Link>
            </div>
          </li>
          <li className="list-none pl-0">
            <Link
              href="https://arxiv.org/abs/2411.09572"
              className="no-underline font-semibold"
            >
              Dynamic Reconstruction of Hand-Object Interaction with Distributed
              Force-aware Contact Representation
            </Link>
            <div className="italic">
              Zhenjun Yu*, Wenqiang Xu*,{" "}
              <span className="font-semibold">Pengfei Xie</span>, Yutong Li,
              Cewu Lu
            </div>
            <div className="space-x-4 italic">
              <Link
                href="https://arxiv.org/abs/2411.09572"
                className="no-underline text-blue-700"
              >
                arXiv:2411.09572
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
