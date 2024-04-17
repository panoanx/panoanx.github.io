import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <div className="prose mx-auto">
        <h1 className="">Pengfei Xie 谢鹏飞</h1>
        <h2 className="">About</h2>
        <p>
          I am an undergraduate student majoring in Computer Science (Artificial
          Intelligence) at
          <Link
            className="no-underline text-blue-600 mx-1"
            href="https://www.seu.edu.cn/"
          >
            Southeast University
          </Link>
          expected to graduate in 2024. Since 2022, I have been working with the
          <Link
            className="no-underline text-blue-600 mx-1"
            href="https://mvig.org/"
          >
            Machine Vision and Intelligence Group
          </Link>
          at
          <Link
            className="no-underline text-blue-600 mx-1"
            href="https://www.sjtu.edu.cn/"
          >
            Shanghai Jiao Tong University
          </Link>
          . My experience includes developing general Machine Learning models,
          large-scale systems.
        </p>
        <p>
          I will pursue an M.D. degree in{" "}
          <em className="font-semibold">Clinical Medicine</em>, interested in{" "}
          <em className="font-semibold">Clinical Oncology</em> (Cancer Care), at
          the
          <Link
            className="no-underline text-blue-600 mx-1"
            href="https://www.shsmu.edu.cn/"
          >
            Shanghai Jiao Tong University School of Medicine
          </Link>
          .
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
              <span className="font-semibold underline">Pengfei Xie</span>,
              Wenqiang Xu, Tutian Tang, Zhenjun Yu, Cewu Lu
            </div>
            <div>
              IEEE/CVF Conference on Computer Vision and Pattern Recognition
              (CVPR) 2024
            </div>
            <div className="space-x-4 italic">
              <Link
                href="https://ms-mano.robotflow.ai"
                className="no-underline text-blue-600"
              >
                Project Page
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
