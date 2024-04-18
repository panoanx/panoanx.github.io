import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8 py-16 md:p-24">
      <div className="prose mx-auto">
        <h1 className="">Pengfei Xie 谢鹏飞</h1>
        <h2 className="">About</h2>
        <p>
          I am an undergraduate student majoring in Computer Science (Artificial
          Intelligence) at{" "}
          <Link
            className="no-underline text-blue-600"
            href="https://www.seu.edu.cn/"
          >
            Southeast University
          </Link>
          expected to graduate in 2024. Since 2022, I have been working with the{" "}
          <Link className="no-underline text-blue-600" href="http://mvig.org/">
            Machine Vision and Intelligence Group
          </Link>{" "}
          at{" "}
          <Link
            className="no-underline text-blue-600"
            href="https://cs.sjtu.edu.cn/"
          >
            Department of Computer Science, Shanghai Jiao Tong University
          </Link>
          . My experience includes developing general Machine Learning models,
          large-scale (reinforcement learning, crypto mining) systems, unix
          programming and web applications.
        </p>
        <p>
          I will pursue a M.D. degree in{" "}
          <em className="font-semibold">Clinical Medicine</em> starting 2024, at{" "}
          <Link
            className="no-underline text-blue-600"
            href="https://www.shsmu.edu.cn/"
          >
            Shanghai Jiao Tong University School of Medicine
          </Link>
          , interested in <em className="font-semibold">Clinical Oncology</em>{" "}
          (Cancer Care) .
        </p>

        <h2>Contact</h2>
        <code className="not-prose">xiepf2002 # gmail dot com</code>

        <h2>Publications</h2>

        <ul className="pl-0">
          <li className="list-none pl-0">
            <Link
              href="https://ms-mano.robotflow.ai"
              className="no-underline font-semibold"
            >
              MS-MANO: Enabling Hand Pose Tracking with Biomechanical
              Constraints
            </Link>
            <div>
              <span className="font-semibold">Pengfei Xie</span>, Wenqiang Xu,
              Tutian Tang, Zhenjun Yu, Cewu Lu
            </div>
            <div className="">
              IEEE/CVF Conference on Computer Vision and Pattern Recognition
              (CVPR) 2024
            </div>
            <div className="space-x-4">
              <Link
                href="https://ms-mano.robotflow.ai"
                className="no-underline text-blue-600"
              >
                project page
              </Link>
              <Link
                href="https://arxiv.org/abs/2404.10227"
                className="no-underline text-blue-600"
              >
                arXiv:2404.10227
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
