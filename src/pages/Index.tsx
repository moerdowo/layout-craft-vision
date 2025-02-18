
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Book,
  Video,
  Code,
  Presentation,
  Users,
  FileText,
  PlayCircle,
  Lock,
} from "lucide-react";

const CourseFeatures = [
  { text: "1 Bacaan", icon: Book },
  { text: "2 Video", icon: Video },
  { text: "5 Embed Iframe", icon: Code },
  { text: "2 Kuis", icon: Presentation },
  { text: "1 Coaching", icon: Users },
  { text: "1 Files", icon: FileText },
  { text: "1 Audio", icon: PlayCircle },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="mx-auto max-w-6xl py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Hero Image Section */}
          <div className="content-section">
            <div className="relative overflow-hidden rounded-3xl bg-gray-100">
              <img
                src="/lovable-uploads/88bcba61-1662-42e8-b48c-afe35805a024.png"
                alt="Course Preview"
                className="hero-image w-full"
              />
            </div>
          </div>

          {/* Course Info Section */}
          <div className="content-section space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-600">Kursus Online</h4>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                Belajar Canva
              </h1>
              <h2 className="mt-2 text-2xl font-medium text-gray-600">
                Untuk Pemula
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Tingkatkan Skill kamu dari Rumah
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Helene Paquet
              </h3>
              <p className="text-gray-600">Social Media Manager</p>
            </div>

            <Button className="w-full rounded-full bg-gray-900 px-8 py-6 text-lg font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-gray-800">
              DAFTAR SEKARANG
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <section className="content-section mt-16">
          <h3 className="mb-6 text-xl font-semibold text-gray-900">
            Apa yang akan kamu dapatkan?
          </h3>
          <div className="flex flex-wrap gap-3">
            {CourseFeatures.map((feature, index) => (
              <span key={index} className="feature-tag">
                <feature.icon className="mr-2 h-4 w-4" />
                {feature.text}
              </span>
            ))}
          </div>
        </section>

        {/* Course Content Section */}
        <section className="content-section mt-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Deskripsi</h3>
              <p className="text-gray-600">
                Siap untuk menghasilkan desain visual yang menakjubkan? Bergabunglah dalam kelas "Belajar Canva untuk Pemula" dan mulailah perjalanan kreatif Anda sekarang. Dalam kelas ini, Anda akan memahami Canva, alat desain yang mudah digunakan, serta mempelajari cara membuat desain yang profesional untuk poster, media sosial, brosur, dan banyak lagi.
              </p>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h4 className="font-medium">Konten</h4>
                <div className="space-y-2">
                  {[
                    "Tutorial cara membuat Flyer",
                    "Konsultasi 1on1 Canva",
                    "Modul E-Book Canva",
                    "Modul Audio Canva",
                    "Quiz 2: Pengetahuan Umum",
                  ].map((item, index) => (
                    <Card key={index} className="flex items-center gap-3 p-4">
                      <Lock className="h-5 w-5 text-gray-400" />
                      <span>{item}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <Card className="h-fit p-6">
            <h3 className="mb-4 text-xl font-semibold">Detail</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-600">Harga</h4>
                <p className="text-2xl font-bold">Rp 0</p>
              </div>
              <Button className="w-full bg-blue-500 hover:bg-blue-600">
                BELI SEKARANG
              </Button>
              <div>
                <h4 className="font-medium text-gray-600">Pemateri</h4>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                    <img
                      src="/placeholder.svg"
                      alt="Instructor"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Joko Susilo</p>
                    <p className="text-sm text-gray-600">Designer Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
