import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 py-16 md:py-24 lg:flex lg:gap-x-12 lg:p-24">
        <aside className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start mb-12 lg:mb-0">
          <h1 className="text-4xl font-bold tracking-tight">Pengfei Xie</h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-700">
            M.D. Student, Ruijin Hospital, SJTUSM
          </h2>
          <p className="mt-4 text-gray-600">
            Transitioning from computer science to clinical medicine, with a
            research background in computer vision and robotics.
          </p>

          <div className="mt-8">
            <h3 className="font-semibold text-sm tracking-widest uppercase text-gray-500">
              Contact
            </h3>
            <div className="mt-4">
              <code className="not-prose bg-gray-200 text-gray-700 rounded px-2 py-1 text-sm">
                xiepf2002 # gmail dot com
              </code>
            </div>
          </div>
        </aside>

        <div className="lg:w-2/3">
          <section id="about" className="mb-16 scroll-mt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600">
              About
            </h2>
            <div className="mt-4 space-y-4 text-gray-700">
              <p>
                I am a second-year M.D. student in Clinical Medicine at Ruijin
                Hospital, affiliated with{" "}
                <Link
                  className="font-medium text-green-700 hover:text-green-800 hover:underline transition-colors"
                  href="https://www.shsmu.edu.cn/"
                >
                  Shanghai Jiao Tong University School of Medicine
                </Link>
                , the former Shanghai Second Medical University.
              </p>
              <p>
                I received my B.Eng. degree in Computer Science (Artificial
                Intelligence) from{" "}
                <Link
                  className="font-medium text-green-700 hover:text-green-800 hover:underline transition-colors"
                  href="https://www.seu.edu.cn/"
                >
                  Southeast University
                </Link>{" "}
                in 2024. From 2022 to 2024, I worked at the{" "}
                <Link
                  className="font-medium text-green-700 hover:text-green-800 hover:underline transition-colors"
                  href="https://www.mvig.org/"
                >
                  Machine Vision and Intelligence Group
                </Link>{" "}
                at{" "}
                <Link
                  className="font-medium text-green-700 hover:text-green-800 hover:underline transition-colors"
                  href="https://cs.sjtu.edu.cn/"
                >
                  Department of Computer Science, Shanghai Jiao Tong University
                </Link>
                . My experience includes developing general Machine Learning
                models, large-scale (reinforcement learning, crypto mining)
                systems, unix programming and web applications.
              </p>
            </div>
          </section>

          <section id="publications" className="scroll-mt-24">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-600">
              Publications
            </h2>
            <ul className="mt-4 space-y-8">
              <li className="group">
                <div className="font-medium text-lg">
                  <Link
                    href="https://ms-mano.robotflow.ai"
                    className="text-gray-900 group-hover:text-green-700 transition-colors"
                  >
                    <span className="inline-flex items-baseline">
                      <span>
                        MS-MANO: Enabling Hand Pose Tracking with Biomechanical
                        Constraints
                      </span>
                      <span className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="text-gray-600 mt-1">
                  <span className="font-semibold text-gray-800">
                    Pengfei Xie
                  </span>
                  *, Wenqiang Xu*, Tutian Tang, Zhenjun Yu, Cewu Lu
                </div>
                <div className="text-gray-600 text-sm italic">
                  IEEE/CVF Conference on Computer Vision and Pattern Recognition
                  (CVPR) 2024
                </div>
                <div className="flex items-center space-x-4 text-sm mt-2">
                  <Link
                    href="https://ms-mano.robotflow.ai"
                    className="flex items-center font-medium text-green-700 hover:text-green-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.665l3-3Z" />
                      <path d="M8.603 3.799a4.49 4.49 0 0 1 4.49 4.49l-4.49 4.49a4.49 4.49 0 0 1-6.35 0A4.49 4.49 0 0 1 2.25 9.35l3-3a.75.75 0 0 1 1.06 1.06l-3 3a2.99 2.99 0 0 0 4.24 4.24l4.49-4.49a2.99 2.99 0 0 0-4.24-4.24l-1.755 1.755a.75.75 0 0 1-1.06-1.06l1.755-1.755Z" />
                    </svg>
                    project page
                  </Link>
                  <Link
                    href="https://arxiv.org/abs/2404.10227"
                    className="flex items-center font-medium text-green-700 hover:text-green-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 2.25a.75.75 0 0 0 0 1.5v12.5a.75.75 0 0 0 .75.75h12a.75.75 0 0 0 .75-.75V4.813a.75.75 0 0 0-.22-.53l-2.25-2.25a.75.75 0 0 0-.53-.22H4.5Zm3.75 10.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    arXiv
                  </Link>
                  <Link
                    href="https://openaccess.thecvf.com/content/CVPR2024/papers/Xie_MS-MANO_Enabling_Hand_Pose_Tracking_with_Biomechanical_Constraints_CVPR_2024_paper.pdf"
                    className="flex items-center font-medium text-green-700 hover:text-green-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4.59l-2.1-2.1a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.1 2.1V6.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    pdf
                  </Link>
                </div>
              </li>
              <li className="group">
                <div className="font-medium text-lg">
                  <Link
                    href="https://dextog.robotflow.ai"
                    className="text-gray-900 group-hover:text-green-700 transition-colors"
                  >
                    <span className="inline-flex items-baseline">
                      <span>
                        DexTOG: Learning Task-Oriented Dexterous Grasp with
                        Language Condition
                      </span>
                      <span className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="text-gray-600 mt-1">
                  Jieyi Zhang, Wenqiang Xu, Zhengjun Yu,{" "}
                  <span className="font-semibold text-gray-800">
                    Pengfei Xie
                  </span>
                  , Tutian Tang, Cewu Lu
                </div>
                <div className="text-gray-600 text-sm italic">
                  IEEE Robotics and Automation Letters (RAL), 2024
                </div>
                <div className="flex items-center space-x-4 text-sm mt-2">
                  <Link
                    href="https://dextog.robotflow.ai"
                    className="flex items-center font-medium text-green-700 hover:text-green-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.665l3-3Z" />
                      <path d="M8.603 3.799a4.49 4.49 0 0 1 4.49 4.49l-4.49 4.49a4.49 4.49 0 0 1-6.35 0A4.49 4.49 0 0 1 2.25 9.35l3-3a.75.75 0 0 1 1.06 1.06l-3 3a2.99 2.99 0 0 0 4.24 4.24l4.49-4.49a2.99 2.99 0 0 0-4.24-4.24l-1.755 1.755a.75.75 0 0 1-1.06-1.06l1.755-1.755Z" />
                    </svg>
                    project page
                  </Link>
                </div>
              </li>
              <li className="group">
                <div className="font-medium text-lg">
                  <Link
                    href="https://arxiv.org/abs/2411.09572"
                    className="text-gray-900 group-hover:text-green-700 transition-colors"
                  >
                    <span className="inline-flex items-baseline">
                      <span>
                        Dynamic Reconstruction of Hand-Object Interaction with
                        Distributed Force-aware Contact Representation
                      </span>
                      <span className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="text-gray-600 mt-1">
                  Zhenjun Yu*, Wenqiang Xu*,{" "}
                  <span className="font-semibold text-gray-800">
                    Pengfei Xie
                  </span>
                  , Yutong Li, Cewu Lu
                </div>
                <div className="text-gray-600 text-sm italic">
                  International Conference on Computer Vision (ICCV) 2025
                </div>
                <div className="flex items-center space-x-4 text-sm mt-2">
                  <Link
                    href="https://arxiv.org/abs/2411.09572"
                    className="flex items-center font-medium text-green-700 hover:text-green-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 mr-1.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 2.25a.75.75 0 0 0 0 1.5v12.5a.75.75 0 0 0 .75.75h12a.75.75 0 0 0 .75-.75V4.813a.75.75 0 0 0-.22-.53l-2.25-2.25a.75.75 0 0 0-.53-.22H4.5Zm3.75 10.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    arXiv
                  </Link>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
